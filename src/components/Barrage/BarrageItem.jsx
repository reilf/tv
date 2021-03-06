import React from 'react';
import styles from './Barrage.css';
import EmojiItem from 'components/Emoji/EmojiItem.jsx';
import CategoryItem from 'components/CategoryItem';

const getBarrage = (props) => {
    switch (props.type) {
        case 'emoji':
        const asi = props.content.split('+') ;
            return (
                <EmojiItem xais={asi[0]} yais={asi[1]} />
            )
        
        case 'screen':
            let items = [];

            JSON.parse(props.content).forEach((item, key) => {
                items.push(<CategoryItem filterSwitch={false} key={`${item.roomId}${key}`} type="screen" item={item} />)
            })

            return <div className={styles.share}>{ items }</div>;

        case 'log':
            let ip = props.user.ip ? props.user.ip.city : '';

            return <span>欢迎<strong style={{color: props.user.color}}>{` ${props.user.nickname}` }</strong>!</span>
            
        default:
            return props.content
    }
}

export default (props) => {
    const namecolor = props.color || '#6f6f6f';
    const barrage = getBarrage(props);
    const typeText =  props.type == 'screen' ? '正在看' : '';
    const typeTitle = props.type == 'log' ? true : false; 

    return (
        <li>
            {/*{props.mmr ? <span className={styles.playerMmr}>{props.mmr}</span> : ''}*/}

            {
                typeTitle ? '' : <span  className={styles.playerName} style={{color: namecolor}}>{props.nickname}{typeText}: </span>
            }
            
            { barrage }
        </li>
    )
}