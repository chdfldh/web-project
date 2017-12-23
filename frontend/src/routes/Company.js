import React from 'react';
import './Company.css';

import Card from '../components/Card';
import axios from 'axios';

class Company extends React.Component { 
    
        
        constructor(){
            super();
            
            this.state = {companyArray : []
        }
    }
        
        componentDidMount(){
            axios.get('http://localhost:4000/company')
                .then((response)=>{
                
                    const data = this.state.companyArray.concat(response.data.company);
                    this.setState({ companyArray : data });
            });
        }
    
         render(){
        
        const { companyArray } = this.state;
             
        const list = companyArray.map((v)=>{
           
            return (
                <Card 
                    key={v.id}
                    company={v.name}
                    recruit={v.recruit}
                    rebate={v.rebate}
                    recom={v.recommendation}
                    favorite={v.favorite}
                />
                )
        });
             
        return (
             
            <div>
            <div className="list">{list}</div>
        </div> 
             
        )
    }
}

export default Company;



