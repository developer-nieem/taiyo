import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from 'react-query';


const ChartsPage = () => {

    const { isLoading, data, isError } = useQuery('contact', async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        return response.json();
      });
    
      if (isLoading) {
        return <span>Loading...</span>;
      }
    
      if (isError || !data) {
        return <span>Error fetching data</span>;
      }
     
      console.log(data);
      
      const chartData = [
        { name: 'Active', value: data.active },
        { name: 'Active Per Million', value: data.activePerOneMillion },
        { name: 'Affected Countries', value: data.affectedCountries },
        { name: 'Cases', value: data.cases },
        { name: 'Cases Per Million', value: data.casesPerOneMillion },
        { name: 'Critical', value: data.critical },
        { name: 'Critical Per Million', value: data.criticalPerOneMillion },
        { name: 'Deaths', value: data.deaths },
        { name: 'Deaths Per Million', value: data.deathsPerOneMillion },
        { name: 'One Case Per People', value: data.oneCasePerPeople },
        { name: 'One Death Per People', value: data.oneDeathPerPeople },
        { name: 'One Test Per People', value: data.oneTestPerPeople },
        { name: 'Population', value: data.population },
        { name: 'Recovered', value: data.recovered },
        { name: 'Recovered Per Million', value: data.recoveredPerOneMillion },
        { name: 'Tests', value: data.tests },
        { name: 'Tests Per Million', value: data.testsPerOneMillion },
        { name: 'Today Cases', value: data.todayCases },
        { name: 'Today Deaths', value: data.todayDeaths },
        { name: 'Today Recovered', value: data.todayRecovered },
        { name: 'Updated', value: data.updated },
      ];
      
    return (
        <div className='w-full overflow-x-scroll'>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 'dataMax']} tickCount={5}/>
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
};

export default ChartsPage;