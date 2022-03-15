SELECT countries.name AS country, languages.language, languages.percentage FROM countries
LEFT JOIN languages ON countries.code = languages.country_code
WHERE language = 'Slovene'
ORDER BY percentage DESC;

SELECT countries.name, COUNT(*) AS cities FROM countries
JOIN cities ON countries.id = cities.country_id
group by countries.id
ORDER BY cities DESC;

SELECT cities.name, cities.population, cities.country_id FROM cities
WHERE country_code = 'MEX' 
AND cities.population >= 500000
ORDER BY cities.population DESC;

SELECT countries.name, languages.language, languages.percentage FROM languages
LEFT JOIN countries ON countries.code = languages.country_code
WHERE percentage >= 89.0
ORDER BY percentage DESC; 

SELECT name, surface_area, population FROM countries
WHERE surface_area < 501
AND population >= 100000;

SELECT name, government_form, capital, life_expectancy FROM countries
WHERE government_form = 'Constitutional Monarchy'
AND capital >= 200
AND life_expectancy >= 75.0
ORDER BY life_expectancy DESC;

SELECT countries.name AS country, cities.name AS city, cities.district, cities.population FROM cities
LEFT JOIN countries ON countries.code = cities.country_code
WHERE cities.district = 'Buenos Aires'
AND cities.population >= 500000
ORDER BY population DESC;

SELECT region, COUNT(*) AS countries FROM countries
GROUP BY region
ORDER BY countries DESC;



