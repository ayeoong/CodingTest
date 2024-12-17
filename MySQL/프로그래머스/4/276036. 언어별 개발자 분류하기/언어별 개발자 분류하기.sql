# 13:30 ~ 14:33
# SELECT
#     CASE 
#         WHEN (D.SKILL_CODE & (SELECT SUM(CODE) 
#                              FROM SKILLCODES 
#                              WHERE NAME = "Python" AND CATEGORY = "Front End")) THEN "A"
#         WHEN (D.SKILL_CODE & (SELECT SUM(CODE) 
#                              FROM SKILLCODES 
#                              WHERE NAME IN ("C#"))) THEN "B"
#         WHEN (D.SKILL_CODE & (SELECT SUM(CODE) 
#                              FROM SKILLCODES 
#                              WHERE NAME IN ("JavaScript", "React", "Vue"))) THEN "C"
#         END AS GRADE,
#     D.ID,
#     D.EMAIL
# FROM DEVELOPERS AS D
# ORDER BY GRADE ASC, BINARY D.ID ASC;

# SELECT
#     CASE 
#     WHEN 
#         SELECT S.CODE 
#         FROM SKILLCODES AS S 
#         WHERE S.CODE & D.SKILL_CODE AND S.NAME = "Python"
#         AND EXISTS(
#             SELECT S.CODE
#             FROM SKILLCODES AS S
#             WHERE S.CODE & D.SKILL_CODE AND S.CATEGORY = "Front End"
#         ) THEN "A"
#      WHEN
#         EXISTS(
#             SELECT S.CODE
#             FROM SKILLCODES AS S
#             WHERE S.CODE & D.SKILL_CODE AND S.NAME = "C#"
#         ) THEN "B"
#      WHEN 
#         EXISTS(
#             SELECT S.CODE
#             FROM SKILLCODES AS S
#             WHERE S.CODE & D.SKILL_CODE AND S.CATEGORY = "Front End"
#         ) THEN "C"
#     END AS GRADE,
#     D.ID, D.EMAIL
# FROM DEVELOPERS AS D
# HAVING GRADE IS NOT NULL
# ORDER BY GRADE ASC, ID ASC

SELECT
    CASE
        WHEN D.SKILL_CODE & (
            SELECT SUM(CODE)
            FROM SKILLCODES
            WHERE CATEGORY = "Front End"
            
            AND
            
            D.SKILL_CODE & (
                SELECT SUM(CODE)
                FROM SKILLCODES
                WHERE NAME = "Python"
            )
        ) THEN "A"
        # ) AND D.SKILL_CODE & (SELECT SUM(CODE) FROM SKILLCODES WHERE NAME = "Python")
        # THEN "A"
        WHEN D.SKILL_CODE & (
            SELECT SUM(CODE)
            FROM SKILLCODES
            WHERE NAME = "C#"
        ) THEN "B"
        WHEN D.SKILL_CODE & (
            SELECT SUM(CODE)
            FROM SKILLCODES
            WHERE CATEGORY = "Front End" 
        ) THEN "C"
    END AS GRADE, 
    D.ID,
    D.EMAIL
    FROM DEVELOPERS AS D
    GROUP BY GRADE, D.ID, D.EMAIL
    HAVING GRADE IS NOT NULL
    ORDER BY GRADE ASC, ID ASC