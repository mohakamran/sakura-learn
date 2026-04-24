export interface LessonItem {
  japanese: string;
  romaji: string;
  english: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  items: LessonItem[];
}

export const lessonsData: Lesson[] = [
  {
    id: 'greetings',
    title: 'Greetings',
    description: 'Common Japanese greetings for everyday life.',
    items: [
      { japanese: 'こんにちは', romaji: 'Konnichiwa', english: 'Hello / Good afternoon' },
      { japanese: 'おはよう', romaji: 'Ohayou', english: 'Good morning' },
      { japanese: 'こんばんは', romaji: 'Konbanwa', english: 'Good evening' },
      { japanese: 'さようなら', romaji: 'Sayounara', english: 'Goodbye' },
      { japanese: 'ありがとう', romaji: 'Arigatou', english: 'Thank you' },
      { japanese: 'すみません', romaji: 'Sumimasen', english: 'Excuse me / I\'m sorry' },
      { japanese: 'はい', romaji: 'Hai', english: 'Yes' },
      { japanese: 'いいえ', romaji: 'Iie', english: 'No' },
    ]
  },
  {
    id: 'numbers',
    title: 'Numbers (1-10)',
    description: 'Learn to count from one to ten in Japanese.',
    items: [
      { japanese: 'いち', romaji: 'Ichi', english: 'One' },
      { japanese: 'に', romaji: 'Ni', english: 'Two' },
      { japanese: 'さん', romaji: 'San', english: 'Three' },
      { japanese: 'し / よん', romaji: 'Shi / Yon', english: 'Four' },
      { japanese: 'ご', romaji: 'Go', english: 'Five' },
      { japanese: 'ろく', romaji: 'Roku', english: 'Six' },
      { japanese: 'しち / なな', romaji: 'Shichi / Nana', english: 'Seven' },
      { japanese: 'はち', romaji: 'Hachi', english: 'Eight' },
      { japanese: 'く / きゅう', romaji: 'Ku / Kyuu', english: 'Nine' },
      { japanese: 'じゅう', romaji: 'Juu', english: 'Ten' },
    ]
  },
  {
    id: 'phrases',
    title: 'Common Phrases',
    description: 'Useful phrases for basic communication.',
    items: [
      { japanese: 'お元気ですか？', romaji: 'O-genki desu ka?', english: 'How are you?' },
      { japanese: '元気です。', romaji: 'Genki desu.', english: 'I am fine.' },
      { japanese: 'お名前は何ですか？', romaji: 'O-namae wa nan desu ka?', english: 'What is your name?' },
      { japanese: 'わかりますか？', romaji: 'Wakarimasu ka?', english: 'Do you understand?' },
      { japanese: 'わかります。', romaji: 'Wakarimasu.', english: 'I understand.' },
      { japanese: 'わかりません。', romaji: 'Wakarimasen.', english: 'I don\'t understand.' },
      { japanese: 'もう一度お願いします。', romaji: 'Mou ichido onegaishimasu.', english: 'One more time, please.' },
      { japanese: 'ゆっくりお願いします。', romaji: 'Yukkuri onegaishimasu.', english: 'Slowly, please.' },
    ]
  },
  {
    id: 'n5-vocab',
    title: 'JLPT N5 Vocabulary',
    description: 'Essential words for the N5 level.',
    items: [
      { japanese: '学生', romaji: 'Gakusei', english: 'Student' },
      { japanese: '先生', romaji: 'Sensei', english: 'Teacher' },
      { japanese: '学校', romaji: 'Gakkou', english: 'School' },
      { japanese: '勉強', romaji: 'Benkyou', english: 'Study' },
      { japanese: '食べる', romaji: 'Taberu', english: 'To eat' },
      { japanese: '飲む', romaji: 'Nomu', english: 'To drink' },
      { japanese: '行く', romaji: 'Iku', english: 'To go' },
      { japanese: '来る', romaji: 'Kuru', english: 'To come' },
    ]
  },
  {
    id: 'n4-vocab',
    title: 'JLPT N4 Vocabulary',
    description: 'Essential words for the N4 level.',
    items: [
      { japanese: '準備', romaji: 'Junbi', english: 'Preparation' },
      { japanese: '経験', romaji: 'Keiken', english: 'Experience' },
      { japanese: '説明', romaji: 'Setsumei', english: 'Explanation' },
      { japanese: '注意', romaji: 'Chuui', english: 'Caution / Attention' },
      { japanese: '連絡', romaji: 'Renraku', english: 'Contact / Communication' },
      { japanese: '相談', romaji: 'Soudan', english: 'Consultation' },
      { japanese: '反対', romaji: 'Hantai', english: 'Opposition' },
      { japanese: '賛成', romaji: 'Sansei', english: 'Agreement' },
    ]
  },
  {
    id: 'n5-daily',
    title: 'N5: Daily Life',
    description: 'Everyday items, food, and home-related vocabulary.',
    items: [
      { japanese: 'ご飯', romaji: 'Gohan', english: 'Meal / Rice' },
      { japanese: '朝ご飯', romaji: 'Asagohan', english: 'Breakfast' },
      { japanese: '昼ご飯', romaji: 'Hirugohan', english: 'Lunch' },
      { japanese: '晩ご飯', romaji: 'Bangohan', english: 'Dinner' },
      { japanese: '水', romaji: 'Mizu', english: 'Water' },
      { japanese: 'お茶', romaji: 'Ocha', english: 'Tea' },
      { japanese: 'パン', romaji: 'Pan', english: 'Bread' },
      { japanese: '卵', romaji: 'Tamago', english: 'Egg' },
      { japanese: '肉', romaji: 'Niku', english: 'Meat' },
      { japanese: '魚', romaji: 'Sakana', english: 'Fish' },
      { japanese: '野菜', romaji: 'Yasai', english: 'Vegetable' },
      { japanese: '果物', romaji: 'Kudamono', english: 'Fruit' },
      { japanese: '家', romaji: 'Ie', english: 'House' },
      { japanese: '部屋', romaji: 'Heya', english: 'Room' },
      { japanese: '窓', romaji: 'Mado', english: 'Window' },
    ]
  },
  {
    id: 'n5-school-time',
    title: 'N5: School & Time',
    description: 'Classroom objects and time-related words.',
    items: [
      { japanese: '教室', romaji: 'Kyoushitsu', english: 'Classroom' },
      { japanese: '机', romaji: 'Tsukue', english: 'Desk' },
      { japanese: '椅子', romaji: 'Isu', english: 'Chair' },
      { japanese: '鉛筆', romaji: 'Enpitsu', english: 'Pencil' },
      { japanese: '消しゴム', romaji: 'Keshigomu', english: 'Eraser' },
      { japanese: '辞書', romaji: 'Jisho', english: 'Dictionary' },
      { japanese: '宿題', romaji: 'Shukudai', english: 'Homework' },
      { japanese: '試験', romaji: 'Shiken', english: 'Exam' },
      { japanese: '今日', romaji: 'Kyou', english: 'Today' },
      { japanese: '明日', romaji: 'Ashita', english: 'Tomorrow' },
      { japanese: '昨日', romaji: 'Kinou', english: 'Yesterday' },
      { japanese: '今週', romaji: 'Konshuu', english: 'This week' },
      { japanese: '来週', romaji: 'Raishuu', english: 'Next week' },
      { japanese: '先週', romaji: 'Senshuu', english: 'Last week' },
      { japanese: '時間', romaji: 'Jikan', english: 'Time' },
    ]
  },
  {
    id: 'n4-work',
    title: 'N4: Work & Business',
    description: 'Vocabulary for the office and professional settings.',
    items: [
      { japanese: '事務所', romaji: 'Jimusho', english: 'Office' },
      { japanese: '会議', romaji: 'Kaigi', english: 'Meeting' },
      { japanese: '資料', romaji: 'Shiryou', english: 'Document / Materials' },
      { japanese: '報告', romaji: 'Houkoku', english: 'Report' },
      { japanese: '決定', romaji: 'Kettei', english: 'Decision' },
      { japanese: '成功', romaji: 'Seikou', english: 'Success' },
      { japanese: '失敗', romaji: 'Shippai', english: 'Failure' },
      { japanese: '残業', romaji: 'Zangyou', english: 'Overtime work' },
      { japanese: '出張', romaji: 'Shutchou', english: 'Business trip' },
      { japanese: '給料', romaji: 'Kyuuryou', english: 'Salary' },
      { japanese: '面接', romaji: 'Mensetsu', english: 'Interview' },
      { japanese: '履歴書', romaji: 'Rirekisho', english: 'Resume' },
      { japanese: '資格', romaji: 'Shikaku', english: 'Qualification' },
      { japanese: '部長', romaji: 'Buchou', english: 'Department Manager' },
      { japanese: '社長', romaji: 'Shachou', english: 'Company President' },
    ]
  },
  {
    id: 'n4-travel-health',
    title: 'N4: Travel & Health',
    description: 'Words for traveling and medical situations.',
    items: [
      { japanese: '飛行機', romaji: 'Hikouki', english: 'Airplane' },
      { japanese: '新幹線', romaji: 'Shinkansen', english: 'Bullet train' },
      { japanese: '予約', romaji: 'Yoyaku', english: 'Reservation' },
      { japanese: '観光', romaji: 'Kankou', english: 'Sightseeing' },
      { japanese: '旅館', romaji: 'Ryokan', english: 'Japanese inn' },
      { japanese: 'お土産', romaji: 'Omiyage', english: 'Souvenir' },
      { japanese: '景色', romaji: 'Keshiki', english: 'Scenery' },
      { japanese: '病院', romaji: 'Byouin', english: 'Hospital' },
      { japanese: '薬', romaji: 'Kusuri', english: 'Medicine' },
      { japanese: '健康', romaji: 'Kenkou', english: 'Health' },
      { japanese: '風邪', romaji: 'Kaze', english: 'Cold (illness)' },
      { japanese: '熱', romaji: 'Netsu', english: 'Fever' },
      { japanese: '咳', romaji: 'Seki', english: 'Cough' },
      { japanese: '怪我', romaji: 'Kega', english: 'Injury' },
      { japanese: '入院', romaji: 'Nyuuin', english: 'Hospitalization' },
    ]
  }
];
