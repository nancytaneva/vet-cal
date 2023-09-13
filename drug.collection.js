const drugCollection = [
    {
      "type"                        : "respiratory",
      "title"                       : "Вентолин 2 мг/ 5 мл",
      "drugConcentration"           : 0.4,
      "drugConcentrationDecorator"  : "mg_ml",
      "activeSubstance"             : "салбутамол",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.02,
            0.05
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q8-12h"
        }
      }
    },
    {
      "type": "respiratory",
      "title": "Софафилин инж. 24 мг/мл",
      "drugConcentration": 24,
      "drugConcentrationDecorator": "mg_ml",
      "activeSubstance": "софафилин",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5,
            6
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "бавно IV"
        }
      }
    },
    {
      "type": "respiratory",
      "title": "Теотард 300 мг табл",
      "activeSubstance": "теофилин",
      "drugConcentration": 300,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            6,
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "3 пъти на ден"
        },
        "cat": {
          "activeSubstanceDose": [
            4
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "1-3 пъти на ден"
        }
      }
    },
    {
      "type": "respiratory",
      "title": "Бромхексин 2 мг/мл амп.",
      "drugConcentration": 2,
      "drugConcentrationDecorator": "mg_ml",
      "activeSubstance": "бромхексин",
      "application": {
        "any": {
          "activeSubstanceDose": [
            2
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q12h"
        }
      }
    },
    {
      "type": "respiratory",
      "title": "Бутомидор 10 мг/ мл",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_ml",
      "activeSubstance": "буторфанол",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.05,
            0.6
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "SAIM:  IM SC, IV, q6-8h"
        }
      }
    },
    {
      "type": "respiratory",
      "title": "Тофадин 10 мг/ мл",
      "activeSubstance": "буторфанол",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.05,
            0.6
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "SAIM:  IM SC, IV, q6-8h"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Ондансетрон Акорд",
      "activeSubstance": "ондансетрон",
      "drugConcentration": 2,
      "drugConcentrationDecorator": "mg_kg",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.2
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "SC IV q12h"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Нолпаза 40 мг/4 мл",
      "activeSubstance": "пантопразол",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_kg",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV q24h"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Нексиум 40 мг",
      "activeSubstance": "езомепразол",
      "drugConcentration": 40,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Панразол 20 мг",
      "activeSubstance": "пантопразол",
      "drugConcentration": 20,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q24h PO"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Квамател 20 мг/ 5 мл?",
      "activeSubstance": "фамотидин",
      "drugConcentration": 24,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO, SC, IM, IV q12-24h (Plump)"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Антепсин 1г/ 5 мл",
      "activeSubstance": "-",
      "drugConcentration": 200,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.5,
            1
          ],
          "activeSubstanceDoseDecorator": "g",
          "applicationMethod": "PO 2-4 пъти на ден"
        },
        "cat": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "g",
          "applicationMethod": "PO 2-4 пъти на ден"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Имодиум 2 мг/ табл.",
      "activeSubstance": "Лоперамид",
      "drugConcentration": 2,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.1
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q12h"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Метронидазол фл. 500 мг. 100 мл.",
      "activeSubstance": "метронидазол",
      "drugConcentration": 5,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            15,
            30
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV q24h"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Ерадия 125 mg_ml",
      "activeSubstance": "метронидазол",
      "drugConcentration": 125,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            50
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO s.i.d. 5-7 дни"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Стоморжил 10",
      "activeSubstance": "метронидазол (+ спирамицин)",
      "drugConcentration": 125,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "s.i.d. 5-10 дни (1 tabl/10 kg)"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Тиловет Б 200",
      "activeSubstance": "тилозин",
      "drugConcentration": 20,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM q24h"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "ДаФорте",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.4
          ],
          "activeSubstanceDoseDecorator": "ml_kg",
          "applicationMethod": "s.i.d."
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "ФортиФлора",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "paketche",
          "applicationMethod": "на ден за 7 дни"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Диа-Таб",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1,2
          ],
          "activeSubstanceDoseDecorator": "tabl_10_kg",
          "applicationMethod": "PO b.i.d. 2-3 дни"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "ЕнтероМикро паста",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.2
          ],
          "activeSubstanceDoseDecorator": "ml_kg",
          "applicationMethod": "s.i.d. 6 дни"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "ВетГастрил",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.2
          ],
          "activeSubstanceDoseDecorator": "ml_kg",
          "applicationMethod": ""
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Малцова паста",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            4
          ],
          "activeSubstanceDoseDecorator": "cm",
          "applicationMethod": "на ден"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Vetoquinol - Bezo Pet Безопет",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "cat": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tsp",
          "applicationMethod": "веднъж дневно (лечение) или 2-3 пъти седмично (профилактика)"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Зирид 50 мг/ табл.",
      "activeSubstance": "итоприд",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1,
            3
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Лактулоза-MIP 65 г/100 мл сироп",
      "activeSubstance": "Лактулоза",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "ml_4.5_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "активен въглен",
      "activeSubstance": "активен въглен",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1,
            3
          ],
          "activeSubstanceDoseDecorator": "paketche",
          "applicationMethod": "в 1,5 л вода"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Трансметил таблетки 500 мг",
      "activeSubstance": "адеметионин",
      "drugConcentration": 500,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            18
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Урзофалк капсули 250 мг",
      "activeSubstance": "урзодезоксихолева киселина",
      "drugConcentration": 250,
      "drugConcentrationDecorator": "mg_caps",
      "application": {
        "any": {
          "activeSubstanceDose": [
            10,
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "s.i.d."
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Зентонил Advanced 100",
      "activeSubstance": "S-Adenosylmethionin",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tabl_5_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Legaphyton 50",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tabl_2.5_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Панкреалекс",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.1
          ],
          "activeSubstanceDoseDecorator": "ml_kg",
          "applicationMethod": "IM SC"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Хепатиале Форте малки породи 170 мг",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "caps_5_kg",
          "applicationMethod": "на ден"
        },
        "cat": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "caps",
          "applicationMethod": "на ден"
        }
      }
    },
    {
      "type": "gastrointestinal",
      "title": "Хепатиале Форте Адвансд",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tabl_10_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Силденафил Стада",
      "activeSubstance": "Силденафил",
      "drugConcentration": 100,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1,
            3
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q8-12h"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Сотахексал 80 мг табл",
      "activeSubstance": "соталол",
      "drugConcentration": 80,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1,
            2
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q12h (Pl)"
        },
        "cat": {
          "activeSubstanceDose": [
            2
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q12h (Pl)"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Клопидогрел 75 мг",
      "activeSubstance": "Клопидогрел",
      "drugConcentration": 75,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "cat": {
          "activeSubstanceDose": [
            18.75
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO веднъж дневно, 1/4 табл"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Фурантрил 40 мг табл",
      "activeSubstance": "Фуроземид",
      "drugConcentration": 40,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            2.5,
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "s.c., i.m., i.v., p.o. q12h. Може  4-6 mg_kg q8h"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Фуроземид 5%",
      "activeSubstance": "Фуроземид",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            2.5,
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV q12h"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Торсит SR 5 mg",
      "activeSubstance": "тораземид",
      "drugConcentration": 5,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Isemid 4 mg",
      "activeSubstance": "тораземид",
      "drugConcentration": 4,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Cardalis 2.5 мг/табл",
      "activeSubstance": "беназеприл и спиронолактон",
      "drugConcentration": 2.5,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.25
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "benazepril qd"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Cardalis 5 мг/табл",
      "activeSubstance": "беназеприл и спиронолактон",
      "drugConcentration": 5,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.25
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "benazepril qd"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Cardalis 10 мг/табл",
      "activeSubstance": "беназеприл и спиронолактон",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.25
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "benazepril qd"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Vetmedin 5 mg",
      "activeSubstance": "пимобендан",
      "drugConcentration": 5,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "разделена на 2 приема за 24 ч"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Cardisure 10 mg",
      "activeSubstance": "пимобендан",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.2,
            0.6
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "на ден (препоръчително е 0,5 mg_kg), разделен на два приема q12h"
        }
      }
    },
    {
      "type": "cardiovascular",
      "title": "Манитол 15%",
      "activeSubstance": "Манитол",
      "drugConcentration": 150,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.5,
            1
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "ИВ на 8, 12 или 24 ч, много бавно се прилага!"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Ноновулин – 10 мг/ табл.",
      "activeSubstance": "мегестролов ацетат",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1,
            2
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO. Първо 3 дни - 1-2 mg_kg, после 7 дни 0,5-1"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Галастоп 50 µg/ml",
      "activeSubstance": "Каберголин",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "µg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "µg_kg",
          "applicationMethod": "qd 4-6 дни"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Достинекс 0,5 мг табл.",
      "activeSubstance": "Каберголин",
      "drugConcentration": 0.5,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "µg_kg",
          "applicationMethod": "PO, qd, до настъпване на проеструс"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Каберговет 50 µg/ml Oral 7 ml",
      "activeSubstance": "Каберголин",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "µg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "µg_kg",
          "applicationMethod": "PO, qd"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Ковинан",
      "activeSubstance": "пролигестон",
      "drugConcentration": 100,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            10,
            33
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "SC в областта на врата или бедрото"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Супрелорин",
      "activeSubstance": "деслорелин",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "implant",
          "applicationMethod": "на куче"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Ипозан 1.875 мг (3-7.5 кг)",
      "activeSubstance": "осатерон",
      "drugConcentration": 1.875,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO, qd за 7 дни"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Ипозан 3.75 мг (7.5-15 кг)",
      "activeSubstance": "осатерон",
      "drugConcentration": 3.75,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO, qd за 7 дни"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Ипозан 7.5 мг (15-30 кг)",
      "activeSubstance": "осатерон",
      "drugConcentration": 7.5,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO, qd за 7 дни"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Ипозан 15 мг (30-60 кг)",
      "activeSubstance": "осатерон",
      "drugConcentration": 15,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO, qd за 7 дни"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Инкюрин 1 мг табл",
      "activeSubstance": "естриол",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tabl",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "КотЕрвин",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            2,
            4
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "на ЖВ, профилактика: qd/ лечение: q12h за 5-7 дни"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "ИркВет 50 мл",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.2
          ],
          "activeSubstanceDoseDecorator": "ml_kg",
          "applicationMethod": "чрез разклащане и приложение PO или върху храната"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Ути-Зен 30 табл.",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1,2
          ],
          "activeSubstanceDoseDecorator": "tabl_10_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Пропалин 40 mg_ml",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            3
          ],
          "activeSubstanceDoseDecorator": "gtt_2_kg",
          "applicationMethod": "2-3 пъти на ден"
        }
      }
    },
    {
      "type": "urogenital",
      "title": "Уриновет Кат",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "cat": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "caps",
          "applicationMethod": "веднъж дневно"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Невротранк инж.",
      "activeSubstance": "ацепромазин",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.02,
            0.03
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV IM"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Золетил 50",
      "activeSubstance": "золазепам + тилетамин",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            5,
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV"
        },
        "cat": {
          "activeSubstanceDose": [
            5,
            7.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Золетил 100",
      "activeSubstance": "золазепам + тилетамин",
      "drugConcentration": 100,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            5,
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV"
        },
        "cat": {
          "activeSubstanceDose": [
            5,
            7.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Анексат 0,5 мг/ 5 мл",
      "activeSubstance": "Флумазенил",
      "drugConcentration": 0.1,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.01
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Бутомидор",
      "activeSubstance": "Буторфанол",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.05,
            0.6
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM SC IV, q6-8"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Тофадин",
      "activeSubstance": "Буторфанол",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.05,
            0.6
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM SC IV, q6-8"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Бупак",
      "activeSubstance": "бупренорфин",
      "drugConcentration": 0.3,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.01,
            0.02
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM, IV"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Бусколизин  1% 50 ml",
      "activeSubstance": "Бусколизин",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.4,
            1
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "IM или бавно IV"
        },
        "cat": {
          "activeSubstanceDose": [
            0.2,
            0.4
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "IM или бавно IV"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Лидокаин Спрей 4,6 мг/ 38 гр.",
      "activeSubstance": "лидокаин",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1,
            3
          ],
          "activeSubstanceDoseDecorator": "sprays",
          "applicationMethod": ""
        }
      }
    },
    {
      "type": "nervous",
      "title": "Новокаин 1%",
      "activeSubstance": "Новокаин",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "за лумбална анестезия"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Пропофол 1%",
      "activeSubstance": "Пропофол",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV"
        }
      }
    },
  
    {
      "type": "nervous",
      "title": "Нивалин 2,5 мг/ мл",
      "activeSubstance": "галантамин",
      "drugConcentration": 2.5,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            8
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "на ден"
        }
      }
    },
  
    {
      "type": "nervous",
      "title": "Фенобарбитал 100 мг/мл инж. р-р",
      "activeSubstance": "Фенобарбитал",
      "drugConcentration": 100,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            8
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "бавно венозно"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Епитил (Epityl) 60 mg tabl",
      "activeSubstance": "Фенобарбитал",
      "drugConcentration": 60,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            2.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO "
        }
      }
    },
    {
      "type": "nervous",
      "title": "КалмиВет Инж.",
      "activeSubstance": "ацепромазин",
      "drugConcentration": 5,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            2.5,
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV IM"
        }
      }
    },
    {
      "type": "nervous",
      "title": "KalmVet",
      "activeSubstance": "Лайка, валериана, триптофан",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "caps",
          "applicationMethod": "на ден"
        }
      }
    },
    {
      "type": "nervous",
      "title": "Милгамма N",
      "activeSubstance": "vit. B1, B6, B12",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tabl",
          "applicationMethod": "PO 3 пъти на ден за 1 месец (q8h)"
        }
      }
    },
    {
      "type": "eyes",
      "title": "Тобракулин 0,3%",
      "activeSubstance": "Тобрамицин",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1,
            2
          ],
          "activeSubstanceDoseDecorator": "gtt",
          "applicationMethod": "на всеки 4 часа"
        }
      }
    },
    {
      "type": "eyes",
      "title": "Гентакулин 0,3%",
      "activeSubstance": "гентамицин",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "cm",
          "applicationMethod": "2-3 пъти дневно"
        }
      }
    },
    {
      "type": "eyes",
      "title": "Кавазан (Cavasan)",
      "activeSubstance": "хлорамфеникол (20 мг/г) и вит. А",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "малко количество",
          "applicationMethod": "в конюнктивалния сак 4 пъти на ден до изчезване на лезиите."
        }
      }
    },
    {
      "type": "ears",
      "title": "Суролан 15 мл",
      "activeSubstance": "миконазол, поломиксин Б, преднизолон",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            3,
            5
          ],
          "activeSubstanceDoseDecorator": "gtt",
          "applicationMethod": "2 пъти дневно"
        }
      }
    },
    {
      "type": "ears",
      "title": "Отодин",
      "activeSubstance": "хлорхексидин + TrisEDTA",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "няколко капки",
          "applicationMethod": "накапете, масажирайте, попийте с марля"
        }
      }
    },
    {
      "type": "ears",
      "title": "Ауризон",
      "activeSubstance": "клотримазол, марбофлоксацин, дексаметазон",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            10
          ],
          "activeSubstanceDoseDecorator": "gtt",
          "applicationMethod": "веднъж дневно за 7-14 дни"
        }
      }
    },
    {
      "type": "ears",
      "title": "Митекс",
      "activeSubstance": "Миконазол, преднизолон, полимиксин Б",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            3,
            5
          ],
          "activeSubstanceDoseDecorator": "gtt",
          "applicationMethod": "два пъти дневно, после масаж в основата на ухото"
        }
      }
    },
    {
      "type": "ears",
      "title": "Унифлокс",
      "activeSubstance": "офлоксацин",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "gtt",
          "applicationMethod": "на вески 6 часа"
        }
      }
    },
    {
      "type": "skin",
      "title": "Апоквел 16 мг",
      "activeSubstance": "оклацитиниб",
      "drugConcentration": 16,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.4,
            0.6
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO, два пъти дневно за максимум 14 дни, поддържаща е веднъж дневно"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Синулокс RTU инж. р-р",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 140,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "SC q12h"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Синулокс табл. 50 мг",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h (два пъти дневно)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Синулокс табл. 250 мг",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 250,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h (два пъти дневно)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Амоксиклав 250 мг/ 62,5 мг/ 5 мл орална суспензия",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 250,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h (два пъти дневно)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Амоксиклав 875 мг/125 мг/ табл.",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 875,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h (два пъти дневно)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Аугментин 500 мг/125 мг",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 500,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h (два пъти дневно)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Клавасептин 50 мг табл.",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h (два пъти дневно)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Клавасептин 62.5 мг табл.",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 62.5,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h (два пъти дневно)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Клавасептин 250 мг табл.",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 250,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h (два пъти дневно)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Клавасептин 500 мг табл.",
      "activeSubstance": "амоксицилин (+ клавуланова к-на)",
      "drugConcentration": 500,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            12.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h (два пъти дневно)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Дуплоцилин LA; 150 000 IU/ml",
      "activeSubstance": "пеницилин G (+бензилпеницилин)",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.1
          ],
          "activeSubstanceDoseDecorator": "ml_kg",
          "applicationMethod": "IM SC, с интервал от 72 часа"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Оспексин 1000 мг табл",
      "activeSubstance": "цефалексин",
      "drugConcentration": 1000,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            20,
            30
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Цефален 500 мг",
      "activeSubstance": "цефалексин",
      "drugConcentration": 500,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO 2 пъти дневно"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Цефален 1000 мг",
      "activeSubstance": "цефалексин",
      "drugConcentration": 1000,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO 2 пъти дневно"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Цефтриаксон прах за инж. р-р",
      "activeSubstance": "Цефтриаксон",
      "drugConcentration": 100,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            50
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV q12h"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Цефтриаксон флакон 2 г MIP",
      "activeSubstance": "Цефтриаксон",
      "drugConcentration": 100,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            50
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV q12h"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "КСИМЕБАК суспензия 40 мг / 5 мл",
      "activeSubstance": "цефподоксим",
      "drugConcentration": 8,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            5,
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO веднъж дневно"
        },
        "cat": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO веднъж дневно"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Гентамицин 1% маз",
      "activeSubstance": "Гентамицин",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "same",
          "applicationMethod": "Засегнатите участъци се намазват с шпатула 2-3 пъти дневно до пълно оздравяване."
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Гентамицин 10%",
      "activeSubstance": "Гентамицин",
      "drugConcentration": 100,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            2,
            4
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "3 пъти дневно (IM или IV)"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Байтрил 5% инж. р-р",
      "activeSubstance": "енрофлоксацин",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "SC 5-10 дни"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Енроксил 50 мг",
      "activeSubstance": "енрофлоксацин",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q24h или два пъти на ден през 12 часа"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Енроксил 15 мг",
      "activeSubstance": "енрофлоксацин",
      "drugConcentration": 15,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q24h или два пъти на ден през 12 часа"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Марфлоксин 20 мг табл.",
      "activeSubstance": "Марбофлоксацин",
      "drugConcentration": 20,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            2
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "на ден, 5-7 дни"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Ципрофлоксацин 500 мг филм табл.",
      "activeSubstance": "Ципрофлоксацин",
      "drugConcentration": 500,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5,
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q12h. Избягвай/ намали при ББ недост., млади, бременни или развъдни ЖВ"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Верафлокс 25 mg_ml",
      "activeSubstance": "прадофлоксацин",
      "drugConcentration": 25,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO веднъж дневно"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Левофлоксацин 500 мг табл.",
      "activeSubstance": "левофлоксацин",
      "drugConcentration": 500,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            25
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Доксициклин 20 мг/ мл",
      "activeSubstance": "доксициклин",
      "drugConcentration": 20,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5,
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q12h за 7-14 дни"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Бисептол 200 мг/ 40 мг/ 5 мл",
      "activeSubstance": "Сулфаметоксазол (+триметоприм)",
      "drugConcentration": 48,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "ПО q12h за 7-14 дни (28 дни при токсоплазмоза и др. инфекции) при КЧ може и 30 mg_kg"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Суметролим 25 mg/ml + 5 mg/ml сироп 100 мл.",
      "activeSubstance": "Сулфаметоксазол (+триметоприм)",
      "drugConcentration": 30,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "ПО q12h за 7-14 дни (28 дни при токсоплазмоза и др. инфекции) при КЧ може и 30 mg_kg"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "T.M.P.S. INJ. (Интертрим)",
      "activeSubstance": "Сулфаметоксазол (+триметоприм)",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "ml_10_kg",
          "applicationMethod": "ИМ qd за 5 дни"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "L.S. INJECTION",
      "activeSubstance": "линкомицин (+ спектиномицин)",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "ml_5_kg",
          "applicationMethod": "SC"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Зодон 25 mg_ml",
      "activeSubstance": "клиндамицин",
      "drugConcentration": 25,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            11
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q24h или 5,5 mg_kg q12h 7-10 дни"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Сумамед 200 мг/ 5 мл перорална суспензия",
      "activeSubstance": "азитромицин",
      "drugConcentration": 40,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Азатрил 250 мг капсули",
      "activeSubstance": "азитромицин",
      "drugConcentration": 250,
      "drugConcentrationDecorator": "mg_caps",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5,
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO веднъж дневно"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Клацид 250 мг/ 5 мл",
      "activeSubstance": "Кларитромицин",
      "drugConcentration": 50,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5,
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO q12h"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Метровис 750 мг",
      "activeSubstance": "метронидазол",
      "drugConcentration": 750,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            50
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO s.i.d. 5-7 дни"
        }
      }
    },
    {
      "type": "antibiotics",
      "title": "Метробактин 500 мг",
      "activeSubstance": "метронидазол",
      "drugConcentration": 500,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            50
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO s.i.d. 5-7 дни"
        }
      }
    },
    {
      "type": "antiparasitic",
      "title": "Паразита (Parasita)",
      "activeSubstance": "ивермектин",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "gtt",
          "applicationMethod": "отзад на тила"
        }
      }
    },
    {
      "type": "antiparasitic",
      "title": "Прококс",
      "activeSubstance": "емодепсид (+ толтразурил)",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.5
          ],
          "activeSubstanceDoseDecorator": "ml_kg",
          "applicationMethod": "Разклати флакона, ПО"
        }
      }
    },
    {
      "type": "antiparasitic",
      "title": "Имитицид (Immiticide)",
      "activeSubstance": "меларзомин",
      "drugConcentration": 25,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            2.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM"
        }
      }
    },
    {
      "type": "antiparasitic",
      "title": "Трипаноцен",
      "activeSubstance": "диминазен (+вит. Б12, антипирин)",
      "drugConcentration": 75,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            3.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "или 1 мл/ 22 кг ИМ, 2 пъти през 24 ч"
        }
      }
    },
    {
      "type": "antiparasitic",
      "title": "Имидокарб 120 инж.",
      "activeSubstance": "имидокарб",
      "drugConcentration": 120,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            6.6
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "ИМ или ПК, 2 пъти през 14-21 дни (бабезия)"
        },
        "cat": {
          "activeSubstanceDose": [
            5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "ИМ или ПК, 2 пъти през 14-21 дни (ерлихия)"
        }
      }
    },
    {
      "type": "antiparasitic",
      "title": "Кепромек",
      "activeSubstance": "ивермектин",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            6,
            12
          ],
          "activeSubstanceDoseDecorator": "µg/kg",
          "applicationMethod": "PO, веднъж месечно"
        }
      }
    },
    {
      "type": "chemotherapeutics",
      "title": "Левкеран 2 мг",
      "activeSubstance": "клорамбусил",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            3
          ],
          "activeSubstanceDoseDecorator": "tabl_5_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "chemotherapeutics",
      "title": "Теранекрон Д6",
      "activeSubstance": "екстракт отрова тарантула",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1,
            6
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "ПК през 4-7 дни"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Дексаметазон 0,4%",
      "activeSubstance": "дексаметазон",
      "drugConcentration": 4,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.5,
            2
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "ИВ или ИМ"
        },
        "cat": {
          "activeSubstanceDose": [
            0.5
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "ИВ или ИМ"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Дексаметазон 2 mg_ml",
      "activeSubstance": "дексаметазон",
      "drugConcentration": 2,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.5,
            2
          ],
          "activeSubstanceDoseDecorator": "мl",
          "applicationMethod": "ИВ или ИМ"
        },
        "cat": {
          "activeSubstanceDose": [
            0.5
          ],
          "activeSubstanceDoseDecorator": "мl",
          "applicationMethod": "ИВ или ИМ"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Дексаметазон 4 мг/1 мл инж. р-р",
      "activeSubstance": "дексаметазон",
      "drugConcentration": 4,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IV"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Дексафорт 3 mg_ml",
      "activeSubstance": "дексаметазон",
      "drugConcentration": 3,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM, SC"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Калиеркортин 4 mg_ml",
      "activeSubstance": "дексаметазон",
      "drugConcentration": 4,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.1,
            0.25
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "SC IM IV"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Преднивет 5 мг табл.",
      "activeSubstance": "преднизолон",
      "drugConcentration": 5,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.2,
            4
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO"
        },
        "cat": {
          "activeSubstanceDose": [
            0.3,
            4
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Дермипред 10 мг",
      "activeSubstance": "преднизолон",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.5,
            3
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "q12h"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Мелоксорал 1,5 mg_ml",
      "activeSubstance": "мелоксикам",
      "drugConcentration": 1.5,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.1
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO, първи ден - 0,2 mg_kg, после 0,1"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Мелоксидолор 5 mg_ml",
      "activeSubstance": "мелоксикам",
      "drugConcentration": 5,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.2
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "еднократно ПК, после се дава перорална суспензия"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Ревмокам",
      "activeSubstance": "мелоксикам",
      "drugConcentration": 1.5,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.1
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO на 24 часа, първи ден - 0,2 mg_kg, после 0,1"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Мелбек ФОРТ табл. 15 мг",
      "activeSubstance": "дексаметазон",
      "drugConcentration": 15,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.1
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "PO на 24 часа"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Аналгин 30%",
      "activeSubstance": "метамизол натрий",
      "drugConcentration": 300,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            30
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": ""
        },
        "cat": {
          "activeSubstanceDose": [
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": ""
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Метамизол натрий 30%",
      "activeSubstance": "метамизол натрий",
      "drugConcentration": 300,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            30
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM или ПК"
        },
        "cat": {
          "activeSubstanceDose": [
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM или ПК"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Спазмиум 500 mg_ml + 4 mg_ml",
      "activeSubstance": "метамизол натрий (+хиосцин)",
      "drugConcentration": 500,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            30
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM или SC"
        },
        "cat": {
          "activeSubstanceDose": [
            15
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM или SC"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Алерговет 10%",
      "activeSubstance": "дифенхидрамин",
      "drugConcentration": 100,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            1,
            2
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "IM, SC"
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Трококсил",
      "activeSubstance": "мавакоксиб",
      "drugConcentration": 75,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            2
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "с храната. Втора доза след 14 дни. Трета  доза - след месец след втората."
        }
      }
    },
    {
      "type": "antiinflammatory",
      "title": "Либрела",
      "activeSubstance": "моноклонални антитела",
      "drugConcentration": 15,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            0.5,
            1
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "SC, веднъж месечно (има схема)"
        }
      }
    },
    {
      "type": "others",
      "title": "Ka-Vital",
      "activeSubstance": "витамин К",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tabl_5_kg",
          "applicationMethod": "дневно"
        },
        "cat": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tabl",
          "applicationMethod": "дневно"
        }
      }
    },
    {
      "type": "others",
      "title": "Витацен К3 50 мл",
      "activeSubstance": "витамин К3",
      "drugConcentration": 100,
      "drugConcentrationDecorator": "mg_ml",
      "application": {
        "any": {
          "activeSubstanceDose": [
            5,
            10
          ],
          "activeSubstanceDoseDecorator": "mg_kg",
          "applicationMethod": "на ден за минимум 7 дни (при отравяне с кумарини)"
        }
      }
    },
    {
      "type": "others",
      "title": "CardioVet",
      "activeSubstance": "L-карнитин, Витамин Е, Селен, Коензим Q10, Таурин",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tabl",
          "applicationMethod": "два пъти дневно (КЧ <15 кг)"
        }
      }
    },
    {
      "type": "others",
      "title": "Катозал",
      "activeSubstance": "бутафосфан, вит. Б12",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            0.5,
            5
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "SC IM IV"
        },
        "cat": {
          "activeSubstanceDose": [
            0.25,
            0.5
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "SC IM IV"
        }
      }
    },
    {
      "type": "others",
      "title": "LysinViral Plus",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "cat": {
          "activeSubstanceDose": [
            1,
            2
          ],
          "activeSubstanceDoseDecorator": "ml",
          "applicationMethod": "на ден (КТ под 6 месеца)"
        }
      }
    },
    {
      "type": "others",
      "title": "Duphalyte",
      "activeSubstance": "Витамини, електролити, аминокиселини",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "any": {
          "activeSubstanceDose": [
            10
          ],
          "activeSubstanceDoseDecorator": "ml_kg",
          "applicationMethod": ""
        }
      }
    },
    {
      "type": "others",
      "title": "Гискан-5",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "same",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "ampula",
          "applicationMethod": "КЧ (за кученца е 1/2 ампула)"
        }
      }
    },
    {
      "type": "others",
      "title": "Virbagen Omega 10 MU",
      "activeSubstance": "омега интерферон",
      "drugConcentration": 10,
      "drugConcentrationDecorator": "MU_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            2.5
          ],
          "activeSubstanceDoseDecorator": "MU_kg",
          "applicationMethod": "qd за 3 дни, КЧ, при парво"
        },
        "cat": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "MU_kg",
          "applicationMethod": "qd за 5 дни, КТ, при FeLV, FIV"
        }
      }
    },
    {
      "type": "others",
      "title": "Virbagen Omega 5 MU",
      "activeSubstance": "омега интерферон",
      "drugConcentration": 5,
      "drugConcentrationDecorator": "MU_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            2.5
          ],
          "activeSubstanceDoseDecorator": "MU_kg",
          "applicationMethod": "qd за 3 дни, КЧ, при парво"
        },
        "cat": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "MU_kg",
          "applicationMethod": "qd за 5 дни, КТ, при FeLV, FIV"
        }
      }
    },
    {
      "type": "others",
      "title": "Flexadin Advanced",
      "activeSubstance": "-",
      "drugConcentration": 1,
      "drugConcentrationDecorator": "mg_tabl",
      "application": {
        "dog": {
          "activeSubstanceDose": [
            1
          ],
          "activeSubstanceDoseDecorator": "tabl",
          "applicationMethod": "PO на куче"
        }
      }
    }
  ]