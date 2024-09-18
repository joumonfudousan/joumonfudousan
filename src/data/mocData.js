import image1 from "../assets/1.akiba_ListImage.png";
import image2 from "../assets/2.tochihara_ListImage.png";
import image3 from "../assets/3.sone_ListImage.png";
import image4 from "../assets/4.godera_ListImage.png";
import image5 from "../assets/5.mizuiri_ListImage.png";
import image6 from "../assets/6.zinmei_ListImage.png";
import image7 from "../assets/7.mankata_ListImage.png";
import image8 from "../assets/8.funatsuka_ListImage.png";
import image9 from "../assets/9.mizukumi_ListImage.png";
import image10 from "../assets/10.nishikasio_ListImage.png";
import image11 from "../assets/11.hikageta_ListImage.png";
import image12 from "../assets/12.sawaziri_ListImage.png";
import image13 from "../assets/13.miyanogo_ListImage.png";
import image14 from "../assets/14.kesadaira_ListImage.png";
import image15 from "../assets/15.oyashiki_ListImage.png";
import image16 from "../assets/16.kamimamba_ListImage.png";
import image17 from "../assets/17.osuna_ListImage.png";
import image18 from "../assets/18.bambagaito_ListImage.png";
import image19 from "../assets/19.kubota_ListImage.png";
import image20 from "../assets/20.hirono_ListImage.png";

import imageMain1 from "../assets/1.akiba_KV_main@2.png";
import imageMain2 from "../assets/2.tochihara_KV_main@2.png";
import imageMain3 from "../assets/3.sone_KV_main@2.png";
import imageMain4 from "../assets/4.godera_KV_main@2.png";
import imageMain5 from "../assets/5.mizuiri_KV_main@2.png";
import imageMain6 from "../assets/6.zinmei_KV_main@2.png";
import imageMain7 from "../assets/7.mankata_KV_main@2.png";
import imageMain8 from "../assets/8.funatsuka_KV_main@2.png";
import imageMain9 from "../assets/9.mizukumi_KV_main@2.png";
import imageMain10 from "../assets/10.nishikasio_KV_main@2.png";
import imageMain11 from "../assets/11.hikageta_KV_main@2.png";
import imageMain12 from "../assets/12.sawaziri_KV_main@2.png";
import imageMain13 from "../assets/13.miyanogo_KV_main@2.png";
import imageMain14 from "../assets/14.kesadaira_KV_main@2.png";
import imageMain15 from "../assets/15.oyashiki_KV_main@2.png";
import imageMain16 from "../assets/16.kamimamba_KV_main@2.png";
import imageMain17 from "../assets/17.osuna_KV_main@2.png";
import imageMain18 from "../assets/18.bambagaito_KV_main@2.png";
import imageMain19 from "../assets/19.kubota_KV_main@2.png";
import imageMain20 from "../assets/20.hirono_KV_main@2.png";

import imageSub1 from "../assets/1.akiba_KV_sub@2.png";
import imageSub2 from "../assets/2.tochihara_KV_sub@2.png";
import imageSub3 from "../assets/3.sone_KV_sub@2.png";
import imageSub4 from "../assets/4.godera_KV_sub@2.png";
import imageSub5 from "../assets/5.mizuiri_KV_sub@2.png";
import imageSub6 from "../assets/6.zinmei_KV_sub@2.png";
import imageSub7 from "../assets/7.mankata_KV_sub@2.png";
import imageSub8 from "../assets/8.funatsuka_KV_sub@2.png";
import imageSub9 from "../assets/9.mizukumi_KV_sub@2.png";
import imageSub10 from "../assets/10.nishikasio_KV_main@2-1.png";
import imageSub11 from "../assets/11.hikageta_KV_sub@2.png";
import imageSub12 from "../assets/12.sawaziri_KV_sub@2.png";
import imageSub13 from "../assets/13.miyanogo_KV_sub@2.png";
import imageSub14 from "../assets/14.kesadaira_KV_main@2-1.png";
import imageSub15 from "../assets/15.oyashiki_KV_sub@2.png";
import imageSub16 from "../assets/16.kamimamba_KV_sub@2.png";
import imageSub17 from "../assets/17.osuna_KV_sub@2.png";
import imageSub18 from "../assets/18.bambagaito_KV_sub@2.png";
import imageSub19 from "../assets/19.kubota_KV_sub@2.png";
import imageSub20 from "../assets/20.hirono_KV_main@2-1.png";

// 入居者特典
// const KeyLocation = Object.freeze({
//   1: "豊田地区",
//   2: "足助・藤岡地区",
//   3: "旭地区",
//   4: "稲武地区",
// });

export const locations = [
  {
    id: 1,
    name: "秋葉遺跡",
    describe: "長興寺近くのコンロ付き一軒家",
    location: "森町3丁目",
    size: 8,
    acreage: "4.2m	×	3.3m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川右岸・舌状台地",
    outstanding: [
      "★ 近くで見つかったナイフ形石器は、「長興寺遺跡」として紹介されている！",
    ],
    image: image1,
    imageMain: imageMain1,
    imageSub: imageSub1,
    comment: [
      "この家には石囲炉が設置され、調理がより便利になっています。また、近くで見つかったナイフ形石器もこの地域の特色を表しており、食事の支度に役立つでしょう！",
    ],
    time: "",
    keyLocation: 1,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.358904987704!2d139.54769687577615!3d35.42113827267226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185a5dc847b05d%3A0x3cfbed950a995b91!2s11%20Akibach%C5%8D%2C%20Totsuka%20Ward%2C%20Yokohama%2C%20Kanagawa%20245-0052%2C%20Japan!5e0!3m2!1sen!2s!4v1726541127447!5m2!1sen!2s",
  },
  {
    id: 2,
    name: "栃原遺跡",
    describe: "東山町の四角いコンロ付き一軒家",
    location: "東山町2丁目",
    size: 10,
    acreage: " 4.0m	×	4.0m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "豊田市盆地の斜面上",
    outstanding: ["★ お庭に野外炉あり！"],
    image: image2,
    imageMain: imageMain2,
    imageSub: imageSub2,
    comment: [
      "栃原遺跡は、東山町に位置する広々とした一戸建ての住居です。特に注目すべきは、その四角いコンロと庭の野外炉で、料理を楽しみながら自然を感じられる設計がされています。家の内外で自然と調和した生活を送りたい方にとって、理想的な住環境です。",
    ],
    time: "",
    keyLocation: 1,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6529.645128142673!2d137.1844616!3d35.0861659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a0e3fe9015b5%3A0x3129cdadf7a0663!2s2%20Chome%20Higashiyamacho%2C%20Toyota%2C%20Aichi%20471-0014%2C%20Japan!5e0!3m2!1sen!2s!4v1726541176324!5m2!1sen!2s",
  },
  {
    id: 3,
    name: "曽根遺跡",
    describe: "豊田スタジアム徒歩5分の一軒家",
    location: "森町3丁目",
    size: 19,
    acreage: "5.7m	×	5.6m（方形）",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川中流左岸",
    outstanding: [
      "★ 神明式土器学べます！",
      "★ お部屋に有難い石棒あります！",
      "★ 玄関に有難い埋甕あります！",
    ],
    image: image3,
    imageMain: imageMain3,
    imageSub: imageSub3,
    comment: [
      "縄文時代の魅力満載！玄関にはありがたい埋甕やお部屋にはパワーを感じる石棒、さらに豊田スタジアムまで歩いて5分！歴史を感じつつ、スポーツ観戦も楽しめる生活を始めてみませんか？",
      "豊田スタジアムのすぐそばに位置しているため、スポーツやイベントが楽しめる環境です。また、矢作川が近くに流れており、川沿いを散歩するのが日課です。公園も整備されており、家族でのんびりと過ごすには最適な場所です。",
    ],
    time: "",
    keyLocation: 1,
    fridge: "",
    benefit: ["新しい土器が学べる"],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.497201415866!2d137.17221375!3d35.081872600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a0570dc15de3%3A0xcc1303c2cba28fe0!2s3%20Chome%20Moricho%2C%20Toyota%2C%20Aichi%20471-0806%2C%20Japan!5e0!3m2!1sen!2s!4v1726541264635!5m2!1sen!2s",
  },
  {
    id: 4,
    name: "牛寺遺跡",
    describe: "豊田スタジアムが見える平野の一軒家",
    location: "御立町9丁目、野見町4丁目",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（土器敷炉）",
    scene: "段丘低位面",
    outstanding: ["★珍しい土器敷あり！"],
    image: image4,
    imageMain: imageMain4,
    imageSub: imageSub4,
    comment: [
      "低い立地にありながら、豊田スタジアムからの絶好の眺望を誇ります。炉が備わっていることで、冷え込む季節も温かく過ごすことができ、土器敷が敷かれた部屋は、ユニークなポイントです。",
      "低い立地に位置するが、周辺は開けた景色で、特に豊田スタジアムが見えるのが魅力的です。イベントの日には活気があふれ、地域の文化を感じられます。",
    ],
    time: "",
    keyLocation: 1,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.6592631603946!2d137.17430464999998!3d35.0737733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a1aa941bb357%3A0x8fced2be59e2329f!2s9%20Chome%20Mitachicho%2C%20Toyota%2C%20Aichi%20471-0811%2C%20Japan!5e0!3m2!1sen!2s!4v1726541314642!5m2!1sen!2s",
  },
  {
    id: 5,
    name: "水入遺跡",
    describe: "渡刈町の広大な家",
    location: "渡刈町下糟目",
    size: 12,
    acreage: "4.5m	×	4.3m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（土坑炉）",
    scene: "矢作川右岸の埋没段丘",
    outstanding: [
      "★ 竪穴住居4つ見つかる！",
      "★ 広大な遺跡！",
      "★ 深鉢プレゼント！",
    ],
    image: image5,
    imageMain: imageMain5,
    imageSub: imageSub5,
    comment: [
      "渡刈町の広大な土地に位置しており、広々とした居住スペースが特徴の一つです。地床炉が備わったキッチンは日々の生活に便利さをもたらし、自然環境と調和した生活が可能です。",
    ],
    time: "",
    keyLocation: 1,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.0315523401387!2d137.16304914999998!3d35.03094055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a2269f443b5d%3A0xe4386758bd0d4c41!2sShimokasume%20Togaricho%2C%20Toyota%2C%20Aichi%20470-1202%2C%20Japan!5e0!3m2!1sen!2s!4v1726541351014!5m2!1sen!2s",
  },
  {
    id: 6,
    name: "神明遺跡",
    describe: "鴛鴨の四角い家",
    location: "鴛鴨町神明ほか",
    size: 12,
    acreage: "4.5m	×	4.3m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "-",
    outstanding: ["★炉内土器敷あり！"],
    image: image6,
    imageMain: imageMain6,
    imageSub: imageSub6,
    comment: [
      "東名高速道路の建設をきっかけに発掘調査されました。炉内土器敷がユニークなポイントです。",
    ],
    time: "",
    keyLocation: 1,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.259912465878!2d137.14501724999997!3d35.02522714999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a202bf5911ab%3A0x8d6134fd51011074!2sShinmei%20Oshikamocho%2C%20Toyota%2C%20Aichi%20470-1207%2C%20Japan!5e0!3m2!1sen!2s!4v1726541395382!5m2!1sen!2s",
  },
  {
    id: 7,
    name: "万加田遺跡",
    describe: "籠川と矢作川ちかく平野のお家",
    location: "荒井町万加田",
    size: 17,
    acreage: "4.1m	×	3.9m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（土坑炉）",
    scene: "矢作川中流左岸",
    outstanding: ["★ 珍しい勾玉プレゼント！", "★ 石器プレゼント！"],
    image: image7,
    imageMain: imageMain7,
    imageSub: imageSub7,
    comment: [
      "矢作川と籠川に挟まれた豊かな自然環境に恵まれた地域に位置します。勾玉や石器が多くあり、文化の豊かさを感じられます。",
    ],
    time: "",
    keyLocation: 1,
    fridge: "",
    benefit: ["アクセサリープレゼント"],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.003393463498!2d137.1719873!3d35.10662615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a07e919395c9%3A0x35d4f8d4d834f40f!2sMankada%20Araicho%2C%20Toyota%2C%20Aichi%20470-0333%2C%20Nh%E1%BA%ADt%20B%E1%BA%A3n!5e0!3m2!1svi!2s!4v1726644269150!5m2!1svi!2s",
  },
  {
    id: 8,
    name: "船塚遺跡",
    describe: "越戸駅すぐの土偶と暮らせるお家",
    location: "越戸町下能田",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "-",
    scene: "矢作川中流左岸",
    outstanding: [
      "★ ありがたい土偶と暮らせます！",
      "★ 便利な黒曜石プレゼント！",
    ],
    image: image8,
    imageMain: imageMain8,
    imageSub: imageSub8,
    comment: [
      "越戸駅から西に500mの距離に位置するこの地域は、アクセスが良好で、周辺は自然が豊かです。公共の交通機関の利便性と自然環境のバランスが取れた理想的な立地条件を持っています。家の中にはありがたい土偶が安置されており、古代からの力を感じることができます。",
    ],
    time: "",
    keyLocation: 1,
    fridge: "",
    benefit: ["土偶と暮らせる", "黒曜石プレゼント"],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.9544869016036!2d137.1768373!3d35.10784734999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a080ccc823ad%3A0xd59f8abd69338486!2sShimonoda%20Koshidocho%2C%20Toyota%2C%20Aichi%20470-0332%2C%20Japan!5e0!3m2!1sen!2s!4v1726541529015!5m2!1sen!2s",
  },
  {
    id: 9,
    name: "水汲遺跡",
    describe: "信州からお婿さんが来る！異文化に触れられるお家",
    location: "下川口水汲ほか",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川上流",
    outstanding: [
      "★ 信州からお婿さん来ます！",
      "★ 新しい土器の模様が学べます！",
      "★ 石を並べて何か表現できます！",
      "★ 45252点 243kgの豪華な道具付き",
    ],
    image: image9,
    imageMain: imageMain9,
    imageSub: imageSub9,
    comment: [
      "矢作川上流の激流近くに位置し、山々に囲まれた豊かな自然環境です。季節の移ろいを感じることができる生活が魅力です。",
      "信州から来たお婿さんが持ち込んだ新しい土器の模様があってね、それがまた文化的な深みを加えているんですよ。",
    ],
    time: "",
    keyLocation: 2,
    fridge: "",
    benefit: ["新しい土器が学べる"],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.9356793019!2d137.26739584999999!3d35.183155649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600358494417f7d7%3A0xd185968117c5de52!2sMizukumi%20Shimokawaguchicho%2C%20Toyota%2C%20Aichi%20470-0422%2C%20Japan!5e0!3m2!1sen!2s!4v1726541689452!5m2!1sen!2s",
  },
  {
    id: 10,
    name: "西樫尾町大麦田遺跡",
    describe: "冷蔵庫付き！切山川沿いのお家",
    location: "西樫尾町大麦田",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "-",
    scene: "切山川近く山並みに挟まれた谷底地形",
    outstanding: [
      "★ 冷蔵庫（貯蔵穴）付き！",
      "★ 珍しい耳飾りあり！",
      "★ 84点の石器などをプレゼント！",
    ],
    image: image10,
    imageMain: imageMain10,
    imageSub: imageSub10,
    comment: [
      "切山川の近くにあり、山並みに囲まれた谷底地形で、静かで秘密めいた感じがする場所です。自然の恵みが豊かで、周囲の環境からは季節ごとの変化を感じ取ることができます。",
      "豊田スタジアムのすぐそばに位置しているため、スポーツやイベントが楽しめる環境です。また、矢作川が近くに流れており、川沿いを散歩するのが日課です。公園も整備されており、家族でのんびりと過ごすには最適な場所です。",
    ],
    time: "",
    keyLocation: 2,
    fridge: 1,
    benefit: ["アクセサリープレゼント"],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.6433986329491!2d137.3322952!3d35.17440375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a9d34190582f%3A0x804a3c37f360eeb!2sOmugita%20Nishigashiocho%2C%20Toyota%2C%20Aichi%20444-2532%2C%20Japan!5e0!3m2!1sen!2s!4v1726541731133!5m2!1sen!2s",
  },
  {
    id: 11,
    name: "日陰田遺跡",
    describe: "山並みに囲まれた谷底の貯蔵穴付き住居",
    location: "中立町日陰田ほか",
    size: 8,
    acreage: "3.9m	×	3.4m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "山並みに挟まれた谷底地形の東向き傾斜地",
    outstanding: [
      "★ 貴重な冷蔵庫付き！",
      "★入居者特典：数百のトチやドングリをプレゼント！",
    ],
    image: image11,
    imageMain: imageMain11,
    imageSub: imageSub11,
    comment: [
      "今回紹介する日陰田遺跡は、山並みに囲まれた谷底に位置する静かな住居です。東向きの傾斜地にあるため、朝日をしっかりと浴びることができます。竪穴住居には貯蔵穴があり、トチやドングリなどの食糧を長期保存することが可能です。自然の恵みを享受しながら、ゆったりとした生活をお楽しみいただけます",
      "竪穴住居であるため、夏は涼しく冬は暖かく過ごせます。住居内には貯蔵穴があり、トチやドングリをたくさん保存できるので、長期的に食糧の心配がありません。住まいの中には、どっしりとした安定感があり、家族全員が安心して生活できます。",
    ],
    time: "アクセスxxx分",
    keyLocation: 2,
    fridge: 1,
    benefit: ["どんぐりプレゼント"],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.1691726341937!2d137.28852045!3d35.15240144999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a7fcb09ab729%3A0xe8516f70c1391b57!2sHikageda%20Nakadachicho%2C%20Toyota%2C%20Aichi%20444-2517%2C%20Japan!5e0!3m2!1sen!2s!4v1726541765735!5m2!1sen!2s",
  },
  {
    id: 12,
    name: "沢尻遺跡",
    describe: "緩やかな台地上に立つ一軒家",
    location: "塩ノ沢町沢尻ほか",
    size: 14,
    acreage: "4.9m	×	4.6m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川中流左岸",
    outstanding: ["★ 台地上で風通り抜群！", "★ 豆の栽培体験ができるかも？"],
    image: image12,
    imageMain: imageMain12,
    imageSub: imageSub12,
    comment: [
      "台地上の緩やかな傾斜に位置しているため、自然の風通しが良く、常に心地よい風が吹き抜けています。狭い谷間の地形に囲まれているので、静かで穏やかな環境が広がっています。",
    ],
    time: "アクセスxxx分",
    keyLocation: 2,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1631.210180439273!2d137.2978919!3d35.146135799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a874b0d45363%3A0x3dae6afd81ce7a25!2sSawashiri%20Shionosawacho%2C%20Toyota%2C%20Aichi%20444-2516%2C%20Japan!5e0!3m2!1sen!2s!4v1726541808688!5m2!1sen!2s",
  },
  {
    id: 13,
    name: "宮ノ後遺跡",
    describe: "巴川と足助川の合流地点に佇む住居",
    location: "足助町宮ノ後",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "-",
    scene: "巴川と足助川の合流地点",
    outstanding: ["★ 足助八幡宮からすぐ！"],
    image: image13,
    imageMain: imageMain13,
    imageSub: imageSub13,
    comment: [
      "水のせせらぎが常に心地よく響いています。近くには足助八幡宮があり、日々の生活に安らぎをもたらしてくれます。季節ごとに変わる川沿いの風景が美しく、自然との調和を感じられる場所です。",
    ],
    time: "足助八幡宮近く",
    keyLocation: 2,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1631.4445038817992!2d137.31085105!3d35.13444325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a88aa1abb457%3A0x3fdd825749f36fb!2sMiyanoato%20Asukecho%2C%20Toyota%2C%20Aichi%20444-2424%2C%20Japan!5e0!3m2!1sen!2s!4v1726541842518!5m2!1sen!2s",
  },
  {
    id: 14,
    name: "今朝平遺跡",
    describe: "足助地区の中心街すぐの一軒家",
    location: "足助町久井戸町ほか",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "-",
    scene: "足助地区の中心街近く、足助川下流の右岸",
    outstanding: [
      "★ 足助地区の中心街すぐ！",
      "★ ありがたい縄文のビーナスと暮らせます！",
      "★ 土偶が多数（22つ）",
    ],
    image: image14,
    imageMain: imageMain14,
    imageSub: imageSub14,
    comment: [
      "足助川の下流に位置しており、川の流れが穏やかで美しいです。中心街にも近く、自然の中にいながらも便利な生活を送ることができます。縄文のビーナスや多数の土偶、耳飾りが発見された場所であり、歴史と文化が息づく特別な住まいです。",
    ],
    time: "アクセスxxx分",
    keyLocation: 2,
    fridge: "",
    benefit: ["土偶と暮らせる"],
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3262.889009767348!2d137.3082761!3d35.1344432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a8fecce1523d%3A0xf711fc2fb0153b17!2sHisaido%20Asukecho%2C%20Toyota%2C%20Aichi%20444-2424%2C%20Japan!5e0!3m2!1sen!2s!4v1726541863907!5m2!1sen!2s",
  },
  {
    id: 15,
    name: "大屋敷遺跡",
    describe: "古代からのエネルギーを感じる巴川近くの一軒家",
    location: "川面町大屋敷ほか",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "大きくカーブする巴川の支流",
    outstanding: ["★ たくさん石が並んでます！（配石遺構）"],
    image: image15,
    imageMain: imageMain15,
    imageSub: imageSub15,
    comment: [
      "住居は大きくカーブする巴川の支流沿いに位置しており、水辺の景色がとても美しいです。大きな配石遺構があり、特にこぶしの石が80cmもあるので、力強い存在感があります。これらの石は古代からのエネルギーを感じさせ、生活に活力を与えてくれます。",
    ],
    time: "アクセスxxx分",
    keyLocation: 2,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.456849313706!2d137.37260554999997!3d35.14522555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004abdfd1f10493%3A0x7a817b69326bd346!2sOyashiki%20Kawamotecho%2C%20Toyota%2C%20Aichi%20444-2403%2C%20Japan!5e0!3m2!1sen!2s!4v1726541905676!5m2!1sen!2s",
  },
  {
    id: 16,
    name: "上万場遺跡",
    describe: "珍しいコンロ付き一軒家",
    location: "浅谷町上万場ほか",
    size: 13,
    acreage: "4.8m	×	4.5m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（土器埋設炉）",
    scene: "-",
    outstanding: ["★ 珍しいコンロあり！"],
    image: image16,
    imageMain: imageMain16,
    imageSub: imageSub16,
    comment: [
      "珍しい土器埋設炉があります。古代の技術を感じさせるこの炉は、家全体に安定した温かさをもたらし、快適な生活をサポートします。",
    ],
    time: "アクセスxxx分",
    keyLocation: 3,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.418072285997!2d137.37288905!3d35.2458536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600354271c745029%3A0x81fc97b8ae03e41d!2sKamimanba%20Azakaicho%2C%20Toyota%2C%20Aichi%20444-2832%2C%20Japan!5e0!3m2!1sen!2s!4v1726541935144!5m2!1sen!2s",
  },
  {
    id: 17,
    name: "大砂遺跡",
    describe: "神秘的なマムシの取手と古代装飾が魅力の住居",
    location: "下切町大砂",
    size: 12,
    acreage: "4.8m	×	4.0m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川右岸",
    outstanding: [
      "★ 在地の神明式という土器が学べます！",
      "★ 長野の文化（つり手、取手、装飾）を体験できます！",
      "★ 伊奈地方の唐草文も学べます！",
      "★ 土偶8つ、耳飾り3つをプレゼント！",
    ],
    image: image17,
    imageMain: imageMain17,
    imageSub: imageSub17,
    comment: [
      "神明式土器や唐草模様の装飾が施された土器があり、古代の思いを身近に感じられます。特に、マムシの顔の取手が付いた土器は珍しく神秘的です。自然豊かな環境で、歴史を感じながらのびのびと暮らせます。",
      "在地の縄文を学びながら、長野の文化にも触れられて楽しい毎日です！",
    ],
    time: "アクセスxxx分",
    keyLocation: 3,
    fridge: "",
    benefit: ["新しい土器が学べる", "土偶と暮らせる", "アクセサリープレゼント"],
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3258.418072285997!2d137.3703141!3d35.2458536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003542bab608d13%3A0xe8bbc3e6ee1cd02d!2sOsuna%20Shimogiricho%2C%20Toyota%2C%20Aichi%20444-2833%2C%20Japan!5e0!3m2!1sen!2s!4v1726541970066!5m2!1sen!2s",
  },
  {
    id: 18,
    name: "万場垣内遺跡",
    describe: "黒曜石が輝く三河山地の一軒家",
    location: "牛地町万場垣内ほか",
    size: 15,
    acreage: "5.0m	×	4.8m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "三河山地の矢作川の左岸",
    outstanding: ["★ 美しい黒曜石プレゼント！"],
    image: image18,
    imageMain: imageMain18,
    imageSub: imageSub18,
    comment: [
      "特に特徴的なのは、黒曜石が多く見られることです。星糞峠からの黒曜石は、光を受けてキラキラと輝く様子が美しいです。",
    ],
    time: "アクセスxxx分",
    keyLocation: 3,
    fridge: "",
    benefit: ["黒曜石プレゼント"],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.3637753157154!2d137.2760597!3d35.097626250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a614c20d5451%3A0x5c23605ee4bbf80e!2sGejigaito%20Shirakuracho%2C%20Toyota%2C%20Aichi%20444-2327%2C%20Japan!5e0!3m2!1sen!2s!4v1726542002181!5m2!1sen!2s",
  },
  {
    id: 19,
    name: "久保田遺跡",
    describe: "ダム湖近くの住吉の森に佇む竪穴住居",
    location: "牛地町久保田ほか",
    size: 8,
    acreage: " 4.0m	×	3.4m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（地床炉）",
    scene: "-",
    outstanding: ["★ ダムのすぐ近く！"],
    image: image19,
    imageMain: imageMain19,
    imageSub: imageSub19,
    comment: [
      "住吉の森に隣接しており、周囲は緑豊かな自然に囲まれています。近くにはダム湖があり、水辺の美しい風景を楽しむことができます。",
    ],
    time: "アクセスxxx分",
    keyLocation: 3,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d104378.85750892972!2d137.5022761!3d35.1606284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004aaaa3d30460b%3A0xde4c75c9a49e7a6a!2sUshijicho%2C%20Toyota%2C%20Aichi%20444-2801%2C%20Japan!5e0!3m2!1sen!2s!4v1726542033049!5m2!1sen!2s",
  },
  {
    id: 20,
    name: "ヒロノ遺跡",
    describe: "野入川を見渡す丘の上に佇む大型住居群",
    location: "大野瀬町ヒロノ",
    size: 8,
    acreage: " 4.0m	×	3.4m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "野入川左岸の丘の上",
    outstanding: ["★ ありがたい石棒あり！"],
    image: image20,
    imageMain: imageMain20,
    imageSub: imageSub20,
    comment: [
      "野入川左岸の丘の上に位置する大型住居群です。竪穴住居が8つ並んでおり、広々とした空間で快適な生活を送ることができます。特に、この住居には大型の石棒が存在し、古代の力強いエネルギーを感じることができます。川沿いの美しい風景と古代の文化を感じながら、心豊かな生活を楽しむことができるこの物件で、新たな生活を始めてみませんか。",
    ],
    time: "アクセスxxx分",
    keyLocation: 4,
    fridge: "",
    benefit: [""],
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.2446860414816!2d137.53625499999998!3d35.250167999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b560d4ad2bfdb%3A0xc33ceafb363db2ca!2sKashiwabora!5e0!3m2!1sen!2s!4v1726542057294!5m2!1sen!2s",
  },
];
