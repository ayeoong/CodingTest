SELECT
    A.ITEM_ID,
    I.ITEM_NAME,
    I.RARITY
FROM (
    SELECT
        T.ITEM_ID
    FROM ITEM_TREE AS T
    LEFT JOIN ITEM_INFO AS I ON T.PARENT_ITEM_ID = I.ITEM_ID -- AND I.RARITY = "RARE" 
    WHERE I.RARITY = "RARE"
) AS A
LEFT JOIN ITEM_INFO AS I ON A.ITEM_ID = I.ITEM_ID
ORDER BY A.ITEM_ID DESC