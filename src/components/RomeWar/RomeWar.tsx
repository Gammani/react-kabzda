import React from "react";
import s from './RomeWar.module.css';

type PropsType = {
    boot: boolean
    armor: boolean
    armorP: boolean
    helmet: boolean
    sword: boolean
    shield: boolean
    luk: boolean
    armor2: boolean
}


function RomeWar(props: PropsType) {

    return (
        <div>
            <div className={s.heroStyle}>
                <img src={"https://www.romewar.ru/game_img/player_model/race_1/1/1/player.gif"}
                     alt={"hero"}/>
            </div>
            {props.boot && <div className={s.bootStyle}>
                <img src={"https://www.romewar.ru/game_img/items/2/1/378_img1.gif"} alt={"boot"}/></div>}
            {props.armor && <div className={s.armorStyle}>
                <img src={"https://www.romewar.ru/game_img/items/2/1/377_img1.gif"} alt={"armor"}/></div>}
            {props.armorP && <div className={s.armorPStyle}>
                <img src={"https://www.romewar.ru/game_img/items/2/1/376_img1.gif"} alt={"armorP"}/></div>}
            {props.helmet && <div className={s.helmetStyle}>
                <img src={"https://www.romewar.ru/game_img/items/2/1/375_img1.gif"} alt={"helmet"}/></div>}
            {props.sword && <div className={s.swordStyle}>
                <img src={"https://www.romewar.ru/game_img/items/2/1/373_img2.gif"} alt={"sword"}/></div>}
            {props.shield && <div className={s.shieldStyle}>
                <img src={"https://www.romewar.ru/game_img/items/2/1/374_img1.gif"} alt={"shield"}/></div>}
            {props.luk && <div className={s.luk}>
                <img src={"https://www.romewar.ru/game_img/items/2/2/1108288_img1.gif"} alt={"luk"}/></div>}
            {props.armor2 && <div className={s.armor2}>
                <img src={"https://www.romewar.ru/game_img/items/2/2/525_img1.gif"} alt={"armor2"}/></div>}
                {/*<div><button>Надеть поножи</button><button>Снять поножи</button></div>*/}
                {/*<div><button>Надеть броню</button><button>Снять броню</button></div>*/}
                {/*<div><button>Надеть наплечи</button><button>Сеять наплечи</button></div>*/}
                {/*<div><button>Надеть шлем</button><button>Снять шлем</button></div>*/}
                {/*<div><button>Взять оружие</button><button>Снять оружие</button></div>*/}
                {/*<div><button>Взять щит</button><button>Положить щит</button></div>*/}
                {/*<div><button>Взять лук</button><button>Снять лук</button></div>*/}
                {/*<div><button>Надеть наплечи 2</button><button>Снять наплечи 2</button></div>*/}
        </div>
    )
}


export default RomeWar;