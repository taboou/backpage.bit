import React from 'react'
 
import { observer } from 'mobx-react'

import {
    US_Directory,
    CA_Directory,
    EU_Directory,
    Asia_Directory,
} from '../components/Directories'

@observer
export default class Home extends React.Component {
    render() {
        const region = 'region'
        const city = 'city'

        return (
            <div id="mainWrapper">
                <div id="geoListings">
                    <div class="column">
                        <US_Directory />
                    </div>

                    <div class="column">
                        <CA_Directory />
                        <EU_Directory />
                        <Asia_Directory />

                
                    
                
                    
                        <div class="australia-and-oceania geoBlock">
                          <h2>Australia and Oceania</h2>
                          <div class="inner">
                          <div v-for="region in au_oceania_regions" class="geoUnit">
                            <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
                            <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
                        </div>
                          </div>
                        </div>

                <div class="latin-america-and-caribbean geoBlock">
                          <h2>Latin America and Caribbean</h2>
                          <div class="inner">
                          <div v-for="region in latin_caribbean_regions" class="geoUnit">
                            <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
                            <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
                        </div>
                          </div>
                        </div>
                    
                <div class="africa geoBlock">
                          <h2>Africa</h2>
                          <div class="inner">
                          <div v-for="region in african_regions" class="geoUnit">
                            <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
                            <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
                        </div>
                          </div>
                        </div>
                  </div>

                  <div class="clearfix"></div>
                </div>
            </div>
        )
    }
}
