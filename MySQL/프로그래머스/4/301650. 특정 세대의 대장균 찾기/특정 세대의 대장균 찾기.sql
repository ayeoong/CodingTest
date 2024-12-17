WITH RECURSIVE CTE AS (
    SELECT ID, PARENT_ID, 1 AS DEPTH
    FROM ECOLI_DATA
    WHERE PARENT_ID IS NULL
    
    UNION ALL 
    
    SELECT E.ID, E.PARENT_ID, CTE.DEPTH + 1
    FROM ECOLI_DATA AS E
    INNER JOIN CTE ON E.PARENT_ID = CTE.ID
)

SELECT ID
FROM CTE
WHERE DEPTH = 3