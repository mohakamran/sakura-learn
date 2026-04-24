export interface Kanji {
  character: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  level: 'N5' | 'N4';
  examples: { word: string; reading: string; meaning: string }[];
}

export const kanjiData: Kanji[] = [
  // N5 Kanji
  {
    character: '一',
    meaning: 'One',
    onyomi: 'イチ (ichi)',
    kunyomi: 'ひと (hito)',
    level: 'N5',
    examples: [
      { word: '一つ', reading: 'ひとつ (hitotsu)', meaning: 'One thing' },
      { word: '一人', reading: 'ひとり (hitori)', meaning: 'One person' }
    ]
  },
  {
    character: '二',
    meaning: 'Two',
    onyomi: 'ニ (ni)',
    kunyomi: 'ふた (futa)',
    level: 'N5',
    examples: [
      { word: '二つ', reading: 'ふたつ (futatsu)', meaning: 'Two things' },
      { word: '二人', reading: 'ふたり (futari)', meaning: 'Two people' }
    ]
  },
  {
    character: '三',
    meaning: 'Three',
    onyomi: 'サン (san)',
    kunyomi: 'み (mi)',
    level: 'N5',
    examples: [
      { word: '三つ', reading: 'みっつ (mittsu)', meaning: 'Three things' },
      { word: '三日', reading: 'みっか (mikka)', meaning: 'Third day of the month' }
    ]
  },
  {
    character: '日',
    meaning: 'Day, Sun',
    onyomi: 'ニチ、ジツ (nichi, jitsu)',
    kunyomi: 'ひ、び、か (hi, bi, ka)',
    level: 'N5',
    examples: [
      { word: '日本', reading: 'にほん (nihon)', meaning: 'Japan' },
      { word: '日曜日', reading: 'にちようび (nichiyoubi)', meaning: 'Sunday' }
    ]
  },
  {
    character: '月',
    meaning: 'Month, Moon',
    onyomi: 'ゲツ、ガツ (getsu, gatsu)',
    kunyomi: 'つき (tsuki)',
    level: 'N5',
    examples: [
      { word: '一月', reading: 'いちがつ (ichigatsu)', meaning: 'January' },
      { word: '今月', reading: 'こんげつ (kongetsu)', meaning: 'This month' }
    ]
  },
  {
    character: '火',
    meaning: 'Fire',
    onyomi: 'カ (ka)',
    kunyomi: 'ひ (hi)',
    level: 'N5',
    examples: [
      { word: '火曜日', reading: 'かようび (kayoubi)', meaning: 'Tuesday' },
      { word: '火山', reading: 'かざん (kazan)', meaning: 'Volcano' }
    ]
  },
  {
    character: '水',
    meaning: 'Water',
    onyomi: 'スイ (sui)',
    kunyomi: 'みず (mizu)',
    level: 'N5',
    examples: [
      { word: '水曜日', reading: 'すいようび (suiyoubi)', meaning: 'Wednesday' },
      { word: '水道', reading: 'すいどう (suidou)', meaning: 'Water supply' }
    ]
  },
  {
    character: '木',
    meaning: 'Tree, Wood',
    onyomi: 'モク、ボク (moku, boku)',
    kunyomi: 'き (ki)',
    level: 'N5',
    examples: [
      { word: '木曜日', reading: 'もくようび (mokuyoubi)', meaning: 'Thursday' },
      { word: '大木', reading: 'たいぼく (taiboku)', meaning: 'Large tree' }
    ]
  },
  {
    character: '金',
    meaning: 'Gold, Money',
    onyomi: 'キン、コン (kin, kon)',
    kunyomi: 'かね (kane)',
    level: 'N5',
    examples: [
      { word: '金曜日', reading: 'きんようび (kinyoubi)', meaning: 'Friday' },
      { word: 'お金', reading: 'おかね (okane)', meaning: 'Money' }
    ]
  },
  {
    character: '土',
    meaning: 'Soil, Earth',
    onyomi: 'ド、ト (do, to)',
    kunyomi: 'つち (tsuchi)',
    level: 'N5',
    examples: [
      { word: '土曜日', reading: 'どようび (doyoubi)', meaning: 'Saturday' },
      { word: '土地', reading: 'とち (tochi)', meaning: 'Land' }
    ]
  },
  // N4 Kanji
  {
    character: '会',
    meaning: 'Meeting, Meet',
    onyomi: 'カイ (kai)',
    kunyomi: 'あ (a)',
    level: 'N4',
    examples: [
      { word: '会う', reading: 'あう (au)', meaning: 'To meet' },
      { word: '会社', reading: 'かいしゃ (kaisha)', meaning: 'Company' }
    ]
  },
  {
    character: '同',
    meaning: 'Same',
    onyomi: 'ドウ (dou)',
    kunyomi: 'おな (ona)',
    level: 'N4',
    examples: [
      { word: '同じ', reading: 'おなじ (onaji)', meaning: 'Same' },
      { word: '同時', reading: 'どうじ (douji)', meaning: 'Simultaneous' }
    ]
  },
  {
    character: '事',
    meaning: 'Matter, Thing',
    onyomi: 'ジ (ji)',
    kunyomi: 'こと (koto)',
    level: 'N4',
    examples: [
      { word: '仕事', reading: 'しごと (shigoto)', meaning: 'Work' },
      { word: '大事', reading: 'だいじ (daiji)', meaning: 'Important' }
    ]
  },
  {
    character: '自',
    meaning: 'Self',
    onyomi: 'ジ、シ (ji, shi)',
    kunyomi: 'みずか (mizuka)',
    level: 'N4',
    examples: [
      { word: '自分', reading: 'じぶん (jibun)', meaning: 'Oneself' },
      { word: '自転車', reading: 'じてんしゃ (jitensha)', meaning: 'Bicycle' }
    ]
  },
  {
    character: '社',
    meaning: 'Company, Shrine',
    onyomi: 'シャ (sha)',
    kunyomi: 'やしろ (yashiro)',
    level: 'N4',
    examples: [
      { word: '社会', reading: 'しゃかい (shakai)', meaning: 'Society' },
      { word: '神社', reading: 'じんじゃ (jinja)', meaning: 'Shrine' }
    ]
  }
];
