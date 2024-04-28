import alfredo from '../../../public/Images/alfredo.png'
import babycornChilli from '../../../public/Images/babycornChilli.png'
import BBQPizza from '../../../public/Images/BBQPizza.png'
import CarnivalPizza from '../../../public/Images/CarnivalPizza.png'
import ChefSpecialPizza from '../../../public/Images/ChefSpecialPizza.png'
import chicken65 from '../../../public/Images/chicken65.png'
import chickenHariyaliTikka from '../../../public/Images/chickenHariyaliTikka.png'
import chickenLolipop from '../../../public/Images/chickenLolipop.png'
import chickenMalaiTikka from '../../../public/Images/chickenMalaiTikka.png'
import chickenTikka from '../../../public/Images/chickenTikka.png'
import chilliChicken from '../../../public/Images/chilliChicken.png'
import chilliMushroom from '../../../public/Images/chilliMushroom.png'
import chilliPaneer from '../../../public/Images/chilliPaneer.png'
import chilliPrawn from '../../../public/Images/chilliPrawn.png'
import chilliSpecial from '../../../public/Images/chilliSpecial.png'
import ClassicChickenBurger from '../../../public/Images/ClassicChickenBurger.png'
import classicPaneerBurger from '../../../public/Images/classicPaneerBurger.png'
import ClassicWheatMomo from '../../../public/Images/ClassicWheatMomo.png'
import DelightPizza from '../../../public/Images/DelightPizza.png'
import drumsOfHeaven from '../../../public/Images/drumsOfHeaven.png'
import friedRice from '../../../public/Images/friedRice.png'
import gobi65 from '../../../public/Images/gobi65.png'
import honeyChicken from '../../../public/Images/honeyChicken.png'
import hunan from '../../../public/Images/hunan.png'
import kadhaiFusion from '../../../public/Images/kadhaiFusion.png'
import kungPao from '../../../public/Images/kungPao.png'
import manchurian from '../../../public/Images/manchurian.png'
import noodles from '../../../public/Images/noodles.png'
import PahariPaneerTikka from '../../../public/Images/PahariPaneerTikka.png'
import paneerTikka from '../../../public/Images/paneerTikka.png'
import penneArabita from '../../../public/Images/penneArabita.png'
import pepperChicken from '../../../public/Images/pepperChicken.png'
import peppergarlic from '../../../public/Images/peppergarlic.png'
import specialFriedRice from '../../../public/Images/specialFriedRice.png'
import specialNoodles from '../../../public/Images/specialNoodles.png'
import teriyakiChicken from '../../../public/Images/teriyakiChicken.png'
import TikkaPizza from '../../../public/Images/TikkaPizza.png'
import VegCrunchBurgerPaneer from '../../../public/Images/VegCrunchBurgerPaneer.png'
import gulabJamun from '../../../public/Images/gulabJamun.png'
import vegDonneBiryani from '../../../public/Images/vegDonneBiryani.png'
import eggDonneBiryani from '../../../public/Images/eggDonneBiryani.png'
import chickenDonneBiryani from '../../../public/Images/chickenDonneBiryani.png'
import lollipopDonneBiryani from '../../../public/Images/lollipopDonneBiryani.png'
import prawnDonneBiryani from '../../../public/Images/prawnDonneBiryani.png'
import dessertIcon from '../../../public/Images/dessertIcon.png'
import tandoorIcon from '../../../public/Images/tandoorIcon.png'
import pizzaSliceIcon from '../../../public/Images/pizzaSliceIcon.png'
import mainCourseIcon from '../../../public/Images/mainCourseIcon.png'
import chineseIcon from '../../../public/Images/chineseIcon.png'
import biryaniIcon from '../../../public/Images/biryaniIcon.png'

export const MenuItems = [
    dessertIcon,
    tandoorIcon,
    pizzaSliceIcon,
    mainCourseIcon,
    chineseIcon,
    biryaniIcon,
    alfredo,
    babycornChilli,
    BBQPizza,
    CarnivalPizza,
    ChefSpecialPizza, VegCrunchBurgerPaneer, TikkaPizza, teriyakiChicken, specialNoodles, specialFriedRice, peppergarlic,
    pepperChicken, penneArabita, paneerTikka, PahariPaneerTikka, noodles, manchurian, kungPao, kadhaiFusion, hunan,
    chilliMushroom,
    chilliPaneer,
    chilliPrawn,
    chilliSpecial,
    ClassicChickenBurger,
    classicPaneerBurger,
    ClassicWheatMomo,
    DelightPizza,
    drumsOfHeaven,
    friedRice,
    gobi65,
    honeyChicken,
    chicken65,
    chickenHariyaliTikka,
    chickenLolipop,
    chickenMalaiTikka,
    chickenTikka,
    chilliChicken,
    gulabJamun,
    vegDonneBiryani,
    eggDonneBiryani,
    chickenDonneBiryani,
    lollipopDonneBiryani,
    prawnDonneBiryani,
]

export const menu_list = [
    {
        menu_name: "Starters",
        menu_image: pizzaSliceIcon,
    },
    {
        menu_name: "Chinese",
        menu_image: chineseIcon,
    },
    {
        menu_name: "Tandoor",
        menu_image: tandoorIcon,
    },
    {
        menu_name: "Indian Main Course",
        menu_image: mainCourseIcon,
    },
    {
        menu_name: "Biryani",
        menu_image: biryaniIcon,
    },
    {
        menu_name: "Dessert",
        menu_image: dessertIcon,
    },
]

export const food_list = [
    //Starters Burger
    {
        _id: "1",
        name: "Veg Crunch Burger(Paneer)",
        image: VegCrunchBurgerPaneer,
        price: 99,
        descrption: "Wheat based crunchy panner patty burger with mayo & cheese",
        category: "Starters",
        subCategory: "Burger"
    },
    {
        _id: "2",
        name: "Classic Paneer Burger",
        image: classicPaneerBurger,
        price: 129,
        descrption: "Paneer fritters are usually spiced with chilli, garlic, and ginger, before being pan fried",
        category: "Starters",
        subCategory: "Burger"
    },
    {
        _id: "3",
        name: "Classic Paneer Burger",
        image: ClassicChickenBurger,
        price: 129,
        descrption: "Chicken wheat burger with cheese slice",
        category: "Starters",
        subCategory: "Burger"
    },
    //Starters Pizza
    {
        _id: "4",
        name: "Kadhai Fusion",
        image: kadhaiFusion,
        price: 179,
        descrption: "This BBQ panner/ chicken pizza is loaded with diced chicken, spicy barbecue sauce, pepperoncini peppers, onion, and cilantro, cheese",
        category: "Starters",
        subCategory: "Pizza"
    },
    {
        _id: "5",
        name: "BBQ Pizza",
        image: BBQPizza,
        price: 179,
        descrption: "This BBQ panner/ chicken pizza is loaded with diced chicken, spicy barbecue sauce, pepperoncini peppers, onion, and cilantro, cheese [thin crust]",
        category: "Starters",
        subCategory: "Pizza"
    },
    {
        _id: "6",
        name: "Carnival Pizza",
        image: CarnivalPizza,
        price: 229,
        descrption: "This carnival panner/ chicken pizza is loaded with chicken, peppers, Oregano, onion, and cilantro, cheese. [thin crust]",
        category: "Starters",
        subCategory: "Pizza"
    },
    {
        _id: "7",
        name: "Delight Pizza",
        image: DelightPizza,
        price: 229,
        descrption: "Panner/ Chicken delight pizza with cheese + exotic Vegetable [thin crust]",
        category: "Starters",
        subCategory: "Pizza"
    },
    {
        _id: "8",
        name: "Tikka Pizza",
        image: TikkaPizza,
        price: 229,
        descrption: "Panner/ Chicken delight pizza with cheese + exotic Vegetable [thin crust]",
        category: "Starters",
        subCategory: "Pizza"
    },
    {
        _id: "9",
        name: "Chef Special Pizza",
        image: ChefSpecialPizza,
        price: 239,
        descrption: "Chef special Panner/ Chicken  pizza with cheese + variety of exotic Vegetable + Chef special species & sauces [thin crust]",
        category: "Starters",
        subCategory: "Pizza"
    },
    //Starters Pasta
    {
        _id: "10",
        name: "Alfredo",
        image: alfredo,
        price: 249,
        descrption: "Penne Alfredo",
        category: "Starters",
        subCategory: "Pasta"
    },
    {
        _id: "11",
        name: "Penne Arabiata",
        image: penneArabita,
        price: 249,
        descrption: "Penne Arabiata with red sauce",
        category: "Starters",
        subCategory: "Pasta"
    },
    //Starters Momos
    {
        _id: "12",
        name: "Classic Wheat Momos",
        image: ClassicWheatMomo,
        price: 119,
        descrption: "Classic Steam mono wheat based with no added artificial Ingredients",
        category: "Starters",
        subCategory: "Momos"
    },
    //Chinese Starter
    {
        _id: "13",
        name: "Gobi 65",
        image: gobi65,
        price: 199,
        descrption: "Spicy and crispy fried cauliflower bites, seasoned with a blend of Indian spices, typically served as a popular appetizer or snack",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "14",
        name: "Crispy Chilli Babycorn",
        image: babycornChilli,
        price: 229,
        descrption: "Crispy, golden baby corn tossed in a spicy chili sauce for a flavorful, crunchy snack or appetizer",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "15",
        name: "Chicken Lolipop",
        image: chickenLolipop,
        price: 249,
        descrption: "Savory, crispy chicken drumettes with a juicy center, served on a stick for easy snacking - 6 Pcs",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "16",
        name: "Drums of Heaven",
        image: drumsOfHeaven,
        price: 249,
        descrption: "Crispy, bite-sized chicken appetizers tossed in a tangy, spicy sauce, offering a burst of flavor with every bite - 6 pcs",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "17",
        name: "Pepper Chicken",
        image: pepperChicken,
        price: 269,
        descrption: "A savory dish featuring tender chicken marinated in a spicy blend of pepper, herbs, and aromatic spices, offering a bold and flavorful culinary experience. - 8 pcs boneless",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "18",
        name: "Honey Garlic Chicken",
        image: honeyChicken,
        price: 269,
        descrption: "Succulent chicken coated in a sweet and savory glaze of honey and garlic, bursting with flavor. - small 8 pcs",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "19",
        name: "Chicken 65",
        image: chicken65,
        price: 279,
        descrption: "Spicy, crispy South Indian fried chicken bites, bursting with flavor and served as a popular appetizer or snack. - 6 pcs",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "20",
        name: "Special Chilli Panner Dry/Gravy",
        image: chilliPaneer,
        price: 249,
        descrption: "Cubes of paneer cooked with bell peppers, onions, and a flavorful chilli sauce, perfect for vegetarians - 8 Pcs",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "21",
        name: "Special Chilli chicken Dry/Gravy",
        image: chilliSpecial,
        price: 269,
        descrption: "Tender chicken tossed in a spicy, tangy sauce with peppers and onions. - 8 Pcs boneless",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "22",
        name: "Special Chilli Mushroom Dry/Gravy",
        image: chilliMushroom,
        price: 289,
        descrption: "Juicy mushrooms sautéed in a spicy sauce with onions and capsicum, offering a flavorful vegetarian option",
        category: "Chinese",
        subCategory: "Starter"
    },
    {
        _id: "23",
        name: "Special Chilli Prawn Dry/Gravy",
        image: chilliPrawn,
        price: 319,
        descrption: "Succulent prawns stir-fried with garlic, peppers, and chilli sauce, delivering a spicy and savory seafood delight. ",
        category: "Chinese",
        subCategory: "Starter"
    },
    //Chinese Main Course
    {
        _id: "24",
        name: "Manchurian Veg/Non- Veg",
        image: manchurian,
        price: 189,
        descrption: "Succulent Paneer/ chicken pieces coated in a tangy, flavorful Manchurian sauce - 8 pcs",
        category: "Chinese",
        subCategory: "Main Course"
    },
    {
        _id: "25",
        name: "Chilli Special Veg/Non- Veg",
        image: chilliSpecial,
        price: 249,
        descrption: "Succulent Paneer/ chicken/mushroom/prawn  pieces coated in a tangy, flavorful Chilli sauce - 8 pcs",
        category: "Chinese",
        subCategory: "Main Course"
    },
    {
        _id: "26",
        name: "Papper Garlic Veg/Non- Veg",
        image: peppergarlic,
        price: 249,
        descrption: "A tantalizing blend of bold pepper and aromatic garlic, perfectly seasoning tender chicken/paneer/mushroom/prawn for a flavorful culinary experience.",
        category: "Chinese",
        subCategory: "Main Course"
    },
    {
        _id: "27",
        name: "Kung Pao Style Veg/Non- Veg",
        image: kungPao,
        price: 259,
        descrption: "A spicy and flavorful Chinese dish featuring tender chicken or paneer stir-fried with peanuts, vegetables, and chili peppers, seasoned with soy sauce and spices.",
        category: "Chinese",
        subCategory: "Main Course"
    },
    {
        _id: "28",
        name: "Hunan Style Veg/Non- Veg",
        image: hunan,
        price: 289,
        descrption: "A spicy and flavorful dish originating from the Hunan province in China, featuring tender pieces of chicken or paneer stir-fried with a medley of vegetables in a rich and aromatic sauce.",
        category: "Chinese",
        subCategory: "Main Course"
    },
    //Noodles & Rice
    {
        _id: "29",
        name: "Choice of Noodles",
        image: noodles,
        price: 169,
        descrption: "Noodles with all vegetable + choice of toppings",
        category: "Chinese",
        subCategory: "Noodles & Rice"
    },
    {
        _id: "30",
        name: "Special Noodles",
        image: specialNoodles,
        price: 189,
        descrption: "Noodles with all vegetable + choice of toppings",
        category: "Chinese",
        subCategory: "Noodles & Rice"
    },
    {
        _id: "31",
        name: "Choice of Fried Rice",
        image: friedRice,
        price: 169,
        descrption: "Fried Rice with all vegetable + choice of toppings",
        category: "Chinese",
        subCategory: "Noodles & Rice"
    },
    {
        _id: "32",
        name: "Special Fried Rice",
        image: specialFriedRice,
        price: 189,
        descrption: "Special Fried Rice with all vegetable + choice of toppings",
        category: "Chinese",
        subCategory: "Noodles & Rice"
    },
    {
        _id: "33",
        name: "Teriyaki Chicken Fried Rice",
        image: teriyakiChicken,
        price: 329,
        descrption: "Chef special teriyaki chicken fried rice ",
        category: "Chinese",
        subCategory: "Noodles & Rice"
    },
    //Tandoor Starters
    {
        _id: "34",
        name: "Pahari Paneer Tikka - 6 pcs",
        image: PahariPaneerTikka,
        price: 189,
        descrption: "Chef special paneer Pahari tikka",
        category: "Tandoor",
        subCategory: "Tandoor Starters"
    },
    {
        _id: "35",
        name: "Paneer Sholey Tikka",
        image: paneerTikka,
        price: 189,
        descrption: "Paneer Sholey Tikka",
        category: "Tandoor",
        subCategory: "Tandoor Starters"
    },
    {
        _id: "36",
        name: "Chicken Tikka",
        image: chickenTikka,
        price: 189,
        descrption: "Chicken Tikka - flavour of tandoor",
        category: "Tandoor",
        subCategory: "Tandoor Starters"
    },
    {
        _id: "37",
        name: "Chicken Hariyali Tikka",
        image: chickenHariyaliTikka,
        price: 189,
        descrption: "Chicken hariyali tikka with mint & tandoor Flavour",
        category: "Tandoor",
        subCategory: "Tandoor Starters"
    },
    {
        _id: "38",
        name: "Chicken Malai Tikka",
        image: chickenMalaiTikka,
        price: 189,
        descrption: "Chicken Malai tikka with Tangy masala & tandoor Flavour",
        category: "Tandoor",
        subCategory: "Tandoor Starters"
    },

    //Biryani
    {
        _id: "39",
        name: "Veg Donne Biriyani",
        image: vegDonneBiryani,
        price: 79,
        descrption: "Our chef's special signature, cooked with old jeera rice & secret 21 secret served with raita, this is pure nati style.",
        category: "Biryani",
        subCategory: "Donne Biryani"
    },
    {
        _id: "40",
        name: "Egg Donne Biriyani",
        image: eggDonneBiryani,
        price: 179,
        descrption: "Our chef's special signature, cooked with old jeera rice & secret 21 secret served with raita, this is pure nati style with 100ml Raita + 100 Salon",
        category: "Biryani",
        subCategory: "Donne Biryani"
    },
    {
        _id: "41",
        name: "Chicken Donne Biriyani",
        image: chickenDonneBiryani,
        price: 199,
        descrption: "Our chef's special signature, cooked with old jeera rice & secret 21 secret served with raita, this is pure nati style with 100ml Raita + 100 Salon",
        category: "Biryani",
        subCategory: "Donne Biryani"
    },
    {
        _id: "42",
        name: "Chicken Lolipop Donne Biriyani",
        image: lollipopDonneBiryani,
        price: 199,
        descrption: "Our chef's special signature, cooked with old jeera rice & secret 21 secret served with raita, this is pure nati style with 100ml Raita + 100 Salon",
        category: "Biryani",
        subCategory: "Donne Biryani"
    },
    {
        _id: "43",
        name: "Prawn Donne Biriyani",
        image: prawnDonneBiryani,
        price: 229,
        descrption: "Our chef's special signature, cooked with old jeera rice & secret 21 secret served with raita, this is pure nati style with 100ml Raita + 100 Salon",
        category: "Biryani",
        subCategory: "Donne Biryani"
    },
    //Dessert
    {
        _id: "44",
        name: "Gulab Jamun",
        image: gulabJamun,
        price: 40,
        descrption: "2 Pcs Hot Gulab Jamun",
        category: "Dessert",
        subCategory: ""
    },
]