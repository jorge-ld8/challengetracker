import styles from './.module.css'

// Item of the list of challenges
const ChallengeItem = (props) => {
    return (
        <div key={props.id}>
            {Object.keys(props).map(key =>{
                return (
                    <div>{props[key] + ""}</div>
                )
            } )}
        </div>
    );
}

// List of challenges which is the basis of the app
const ChallengeList = ({list}) => {
    return (
        <div className={styles.borderedBox}>
            <b>CHALLENGE LIST</b>
            {list.map((element)=>{
                return (<ChallengeItem {...element}/>)
            })}
        </div>
    )
}

export default ChallengeList;

