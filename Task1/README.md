## Задача №1

| Ограничение времени | Ограничение памяти |
| ------------------- | ------------------ |
| 1 секунда           | 256 МБ             |

### Описание

Костя подключен к мобильному оператору «Мобайл». Абонентская плата Кости составляет _A_ рублей в месяц. За эту стоимость Костя получает _B_ мегабайт интернет-трафика. Если Костя выйдет за лимит трафика, то каждый следующий мегабайт будет стоить ему _C_ рублей.

Костя планирует потратить _D_ мегабайт интернет-трафика в следующий месяц. Помогите ему сосчитать, во сколько рублей ему обойдется интернет.

### Формат входных данных

Вводится 4 целых положительных числа _A_, _B_, _C_, _D_ (1 ≤ _A_, _B_, _C_, _D_ ≤ 100) — стоимость тарифа Кости, размер тарифа Кости, стоимость каждого лишнего мегабайта, размер интернет-трафика Кости в следующем месяце. Числа во входном файле разделены пробелами.

### Формат выходных данных

Выведите одно натуральное число — суммарные расходы Кости на интернет.

### Замечание

В первом примере Костя сначала оплатит пакет интернета, после чего потратит на 5 мегабайт больше, чем разрешено по тарифу. Следовательно, за 5 мегабайт он дополняет отдельно, получившаяся стоимость `100 + 12 × 5 = 160 рублей`.

Во втором примере Костя укладывается в тарифный план, поэтому платит только за него.

## Примеры данных

### Пример 1

| Ввод         | Вывод |
| ------------ | ----- |
| 100 10 12 15 | 160   |

### Пример 2

| Ввод        | Вывод |
| ----------- | ----- |
| 100 10 12 1 | 100   |