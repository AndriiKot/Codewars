SELECT 
    name, 
    greeting, 
    substring(greeting FROM '#(\d+)') AS user_id 
FROM 
    greetings;
