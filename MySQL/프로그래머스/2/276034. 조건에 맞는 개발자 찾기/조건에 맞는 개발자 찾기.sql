# 17:59 ~
SELECT D.ID, D.EMAIL, D.FIRST_NAME, D.LAST_NAME
FROM DEVELOPERS AS D
WHERE D.SKILL_CODE & ((SELECT CODE FROM SKILLCODES WHERE NAME = "Python") | (SELECT CODE FROM SKILLCODES WHERE NAME = "C#"))
ORDER BY BINARY D.ID ASC;