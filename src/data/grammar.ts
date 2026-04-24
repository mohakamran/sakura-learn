export interface GrammarPoint {
  title: string;
  meaning: string;
  structure: string;
  level: 'N5' | 'N4';
  examples: { japanese: string; romaji: string; english: string }[];
}

export const grammarData: GrammarPoint[] = [
  // N5 Grammar
  {
    title: '〜は〜です',
    meaning: 'A is B',
    structure: '[Noun A] は [Noun B] です',
    level: 'N5',
    examples: [
      { japanese: '私は学生です。', romaji: 'Watashi wa gakusei desu.', english: 'I am a student.' },
      { japanese: 'これは本です。', romaji: 'Kore wa hon desu.', english: 'This is a book.' }
    ]
  },
  {
    title: '〜は〜ではありません',
    meaning: 'A is not B',
    structure: '[Noun A] は [Noun B] ではありません',
    level: 'N5',
    examples: [
      { japanese: '田中さんは先生ではありません。', romaji: 'Tanaka-san wa sensei dewa arimasen.', english: 'Mr. Tanaka is not a teacher.' }
    ]
  },
  {
    title: 'Particle の (no)',
    meaning: 'Possession / Modifier',
    structure: '[Noun A] の [Noun B]',
    level: 'N5',
    examples: [
      { japanese: '私の車', romaji: 'Watashi no kuruma', english: 'My car' },
      { japanese: '日本語の本', romaji: 'Nihongo no hon', english: 'Japanese language book' }
    ]
  },
  {
    title: '〜ます / 〜ました',
    meaning: 'Polite Verb (Present / Past)',
    structure: '[Verb Stem] ます / ました',
    level: 'N5',
    examples: [
      { japanese: '食べます', romaji: 'Tabemasu', english: 'To eat / Will eat' },
      { japanese: '食べました', romaji: 'Tabemashita', english: 'Ate' }
    ]
  },
  {
    title: '〜てください',
    meaning: 'Please do...',
    structure: '[Verb Te-form] ください',
    level: 'N5',
    examples: [
      { japanese: '見てください', romaji: 'Mite kudasai', english: 'Please look' },
      { japanese: '読んでください', romaji: 'Yonde kudasai', english: 'Please read' }
    ]
  },
  // N4 Grammar
  {
    title: '〜たことがある',
    meaning: 'Have done something before',
    structure: '[Verb Ta-form] ことが ある',
    level: 'N4',
    examples: [
      { japanese: '日本に行ったことがあります。', romaji: 'Nihon ni itta koto ga arimasu.', english: 'I have been to Japan.' }
    ]
  },
  {
    title: '〜すぎる',
    meaning: 'Too much / Excessive',
    structure: '[Verb Stem / Adj Base] すぎる',
    level: 'N4',
    examples: [
      { japanese: '食べすぎました。', romaji: 'Tabesugimashita.', english: 'I ate too much.' },
      { japanese: 'この本は高すぎます。', romaji: 'Kono hon wa takasugimasu.', english: 'This book is too expensive.' }
    ]
  },
  {
    title: '〜つもり',
    meaning: 'Intend to / Plan to',
    structure: '[Verb Dictionary Form] つもり',
    level: 'N4',
    examples: [
      { japanese: '明日、買い物に行くつもりです。', romaji: 'Ashita, kaimono ni iku tsumori desu.', english: 'I plan to go shopping tomorrow.' }
    ]
  },
  {
    title: '〜ほうがいい',
    meaning: 'Had better / Should',
    structure: '[Verb Ta-form / Nai-form] ほうがいい',
    level: 'N4',
    examples: [
      { japanese: '早く寝たほうがいいですよ。', romaji: 'Hayaku neta hou ga ii desu yo.', english: 'You had better go to sleep early.' }
    ]
  }
];
