import React, {useState} from 'react';
import { DATA } from '../assets/data';
import Tree from './Tree';

const Home = () => {
    
    const [data, setData] = useState(DATA)

    return (
        <div>
            <Tree data={data}/>
        </div>
    )
}

export default Home;