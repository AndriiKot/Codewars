WITH borrowed_books AS (
  SELECT
    loans.book_id
  FROM
    loans
  GROUP BY
    loans.book_id
  HAVING
    COUNT(DISTINCT loans.loan_id) > 0
),
available_books AS (
  SELECT
    loans.book_id
  FROM
    loans
  WHERE loans.return_date IS NULL
)
SELECT
  books.book_id,
  books.title
FROM
  books
WHERE
  books.book_id IN (SELECT book_id FROM borrowed_books)
  AND books.book_id NOT IN (SELECT book_id FROM available_books)
ORDER BY
  books.book_id DESC;
