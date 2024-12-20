# 대장균 ID = ID
# 부모 ID = PARENT_ID
# 개체 크기 = SIZE_OF_COLONY
# 분화날짜 = DIFFERENTIATION_DATE
# 개체 형질 = GENOTYPE

# 출력해야 할 것
# 분화한 연도
# 분화 연도별 대장균 크기의 편차(분화 연도별 가장 큰 대장균의 크기 - 각 대장균의 크기)
# 대장균 개체의 아이디
# 연도 오름차순, 같으면 편차 오름차순

SELECT
    YEAR(e.DIFFERENTIATION_DATE) AS YEAR,
    (
        SELECT MAX(SIZE_OF_COLONY)
        FROM ECOLI_DATA
        WHERE YEAR(DIFFERENTIATION_DATE) = YEAR(e.DIFFERENTIATION_DATE)
    ) - E.SIZE_OF_COLONY AS YEAR_DEV,
    E.ID
FROM ECOLI_DATA AS E
ORDER BY YEAR, YEAR_DEV ASC