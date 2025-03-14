select 
    book_id, 
    title
from 
    books join loans using (book_id)
group by 
    book_id
having 
    every(return_date is not null)
order by 
    book_id desc;

SELECT
  book_id,
  title
FROM books
WHERE book_id IN(SELECT book_id FROM loans GROUP BY book_id HAVING COUNT(loan_id)=COUNT(return_date))
ORDER BY book_id DESC;
