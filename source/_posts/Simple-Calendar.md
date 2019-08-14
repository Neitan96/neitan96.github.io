---
title: Simple Calendar
date: 2019-08-14 17:14:13
tags: [C, API, Calendário, Data, Hora]
categories: [C, API]
---

![Simple Calendar](/images/posts/ThumbSimpleCalendar.png)

Simple Calendar é uma API simples para fazer cálculos com data e hora totalmente em C, podendo trabalhar tanto com milissegundos ou com a representação numérica da data e hora.

### Exemplos:

Funções com milissegundos:
```C
    Milliseconds dataHora = 1569165720000;

    //Adicionando 12 horas
    scMilliAddHour(&dataHora, 12);

    //Subtraindo 3 meses
    scMilliAddMonth(&dataHora, -3);

    //Definindo o ano como 2020
    scMilliSetYear(&dataHora, 2020);

    //Indo para o próximo sábado
	  scMilliJumpToWeekDay(&dataHora, SATURDAY);
```

Funções com Calendar:
```C
    // 22/09/2019 15:22:00 000
    Calendar dataHora = scMakeCalendar(2019, 09, 22, 15, 22, 00, 000);

    //Adicionando 20 dias
    scCalAddMonthDay(&dataHora, 20);

    //Subtraindo 0 minutos
    scCalAddMinute(&dataHora, -40);

    //Definindo a hora como 12
    scCalSetHour(&dataHora, 12);

    //Indo para a segunda semana do ano
	  scCalJumpToWeekYear(&dataHora, 2);

    //Imprimindo a data
    printf("%i/%i/%i", dataHora.monthDay, dataHora.month+1, dataHora.year)
```

Outras funções:

```C
    //Convertendo Milliseconds para Calendar
    Calendar dataHora = scMillisecondsToCalendar(1569165720000);

    //Convertendo Calendar para Milliseconds
    Milliseconds dataHoraMilli = scCalendarToMilliseconds(dataHora);
```

## Estrutura

##### Structs

  * Milliseconds: É um typedef para long long int, utilizado para representar millisegundos.
  * Calendar: Representa uma data e hora utilizando variaveis do tipo inteiro.
  * ExtractTime: Feito para ser utilizado com o ExtractCalendar, ele serve para indicar o milissegundo de um determinado ponto da data/hora, exemplo se o ExtractTime representar um determinado ano, esse ano fica indicado na variável "value" e em "milliseconds" fica o milissegundo do início do ano, se representar um mês, esse mês fica indicado na variável "value" e em "milliseconds" fica o milissegundo do início do mês.
  * ExtractCalendar: É o conjunto de varios ExtractTime representando uma data e hora.

##### Cabeçalhos

- SimpleCalendarBase.h  
Cabeçalho base, contém structs e funções necessarias para outros cabeçalhos.

- SimpleConverts.h  
Funções para converter Milliseconds em Calendar ou ExtractCalendar e virse-versa.

- SimpleMilliseconds.h  
Funções que usa como base a struct Milliseconds para fazer cálculos de datas e horas.

- SimpleCalendar.h  
Funções que usa como base a struct Calendar para fazer cálculos de datas e horas.

- SimpleExtract.h
Funções que detalha a data e hora usando o ExtractCalendar, a data pode ser detalhada com Calendar ou Milliseconds.

##### Funções bases
Todas funções da API começa com **sc** e funções para trabalhar com milissegundos começa com **scMilli** e para trabalhar com Calendar começa com **scCal**.

- **Bases**: Compare, DiffTime, ToString
- **Incrementos/Decrementos**: AddMillisecond, AddSecond, AddMinute, AddHour, AddMonthDay, AddMonth, AddYear, AddWeek
- **Definição de valores**: SetTimeZone, SetMillisecond, SetSecond, SetMinute, SetHour, SetMonthDay, SetMonth, SetYear, SetWeekDay, SetWeekMonth, SetWeekYear
- **Informações**: GetYearDay, GetWeekDay, GetWeekMonth, GetWeekYear
- **Contadores**: CountMonthDay, CountHour, CountMinute, CountSecond