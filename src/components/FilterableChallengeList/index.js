import ChallengeList from "../ChallengeList";
import FilterBar from "../FilterBar";

const FilterableChallengeList = ({challengesList}) => {
    // Remember everything you put here is going to re-render when the component re-renders, so be careful!

    return (
        <div>
            <b>FILTERABLE CHALLENGE LIST</b>
            <FilterBar/>
            <ChallengeList list={challengesList}/>    
        </div>
    )
}

export default FilterableChallengeList;