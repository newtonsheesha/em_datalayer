
/*********
Configuration File for: EM_dataLayer
*********/

var dl_flow = 'NOFF';
if (eBaDataLayer.external_id && eBaDataLayer.external_id.split('-')[1])
dl_flow =  eBaDataLayer.external_id.split('-')[1];

var em_env = '';
if(document.domain.match("kenya-airways.com")){
  em_env = "PRD";
} else{
  em_env = "SA";
};


var em_market = (eBaDataLayer.market != undefined) ? ""+eBaDataLayer.market : "";
var em_BookingFlow = (eBaDataLayer.trip_flow != undefined) ? ""+eBaDataLayer.trip_flow : "";
var em_bId = (eBaDataLayer.page_code != undefined) ? ""+eBaDataLayer.page_code : "";
var em_nbtrav = (eBaDataLayer.nb_trav != undefined) ? ""+eBaDataLayer.nb_trav : "";
var em_pnrnbr = (eBaDataLayer.pnr_nbr != undefined) ? ""+eBaDataLayer.pnr_nbr : "";
var em_officeId = (eBaDataLayer.office_id != undefined) ? ""+eBaDataLayer.office_id : "";
var em_sunRule = wt_sunRule;
var nb_bound = (eBaDataLayer.bound)? eBaDataLayer.bound.length : 0;

var em_rtowin = (eBaDataLayer.trip_type != undefined) ? ""+eBaDataLayer.trip_type : "";
var em_dep = (eBaDataLayer.city_search_out != undefined) ? ""+eBaDataLayer.city_search_out : "";
var em_arr = (eBaDataLayer.city_search_in != undefined) ? ""+eBaDataLayer.city_search_in : "";
var em_depdate = (eBaDataLayer.date_search_out != undefined) ? ""+eBaDataLayer.date_search_out : "";
var em_retdate = (eBaDataLayer.date_search_in != undefined) ? ""+eBaDataLayer.date_search_in : "";
var em_currency = (eBaDataLayer.currency != undefined) ? ""+eBaDataLayer.currency : "";
var em_language = (eBaDataLayer.language != undefined) ? ""+eBaDataLayer.language : "";
var em_pnrTotal = (eBaDataLayer.total_price != undefined) ? ""+eBaDataLayer.total_price : "";
var em_pnrFuelCharge = (eBaDataLayer.fuel_surcharge != undefined) ? ""+eBaDataLayer.fuel_surcharge : "";
var em_pnrTax = (eBaDataLayer.tax_amount != undefined) ? ""+eBaDataLayer.tax_amount : "";
var em_pnrBaseFare = (eBaDataLayer.base_fare_price != undefined) ? ""+eBaDataLayer.base_fare_price : "";
var em_pnrCabin = (eBaDataLayer.pnr_cabin != undefined) ? ""+eBaDataLayer.pnr_cabin : "";

if( em_pnrCabin == 'R' || em_pnrCabin == 'R,R' || em_pnrCabin == 'E' || em_pnrCabin == 'E,E' ){
     em_pnrCabin = 'Economy';
  }
  else if( em_pnrCabin == 'B' || em_pnrCabin == 'B,B'){
     em_pnrCabin = 'Business';
  }

//Data Layer
em_dataLayer = [{
  "priceSpecification": {
    "currencyCode": em_currency,
  },
  "fareTensor": {
      "journeyType": em_rtowin,
      "cells": {
        "priceSpecification": {
        "totalPrice":em_pnrTotal,
        "priceBeforeTaxesAndFees": em_pnrBaseFare,
        "taxAmount": em_pnrTax,
        "additionalFeesAmount": em_pnrFuelCharge      
        },
        "boundType": "MATRIX",
        "isSoldOut": false,
        "outboundDate": em_depdate,
        "inboundDate": em_retdate
      }
    },

  "page": {
    "languageIsoCode": em_language,
    "siteEdition": em_language +'-'+ dep_country
  }

}];

//Passengers

for (var p = 0 ; p <= passengers; p++ ) {

 var pax_type = eBaDataLayer.passengers[p].pax_type;
 var pax_count = eBaDataLayer.passengers[p].nb_pax_type;
 em_dataLayer.push({
  "journey": {
    "passengerDetails": [{
          "category": pax_type,
          "count"   : pax_count

        }]
      }
    });
};

//Flights
var nb_bound = (eBaDataLayer.bound)? eBaDataLayer.bound.length : 0;

for (var i = 0 ; i <= nb_bound; i++ ) {
 var em_depCountry =  (eBaDataLayer.bound[i].dep_country != undefined) ? ""+eBaDataLayer.bound[i].dep_country : "";
 var em_arrCountry = (eBaDataLayer.bound[i].arr_country != undefined) ? ""+eBaDataLayer.bound[i].arr_country : "";
 var em_depAirport = (eBaDataLayer.bound[i].dep_airport != undefined) ? ""+eBaDataLayer.bound[i].dep_airport : "";
 var em_arrAirport = (eBaDataLayer.bound[i].arr_airport != undefined) ? ""+eBaDataLayer.bound[i].arr_airport : "";
 var em_depCity    = (eBaDataLayer.bound[i].dep_city != undefined) ? ""+eBaDataLayer.bound[i].dep_city : "";
 var em_arrCity    = (eBaDataLayer.bound[i].arr_city != undefined) ? ""+eBaDataLayer.bound[i].arr_city : "";
 var em_depDate    = (eBaDataLayer.bound[i].dep_date != undefined) ? ""+eBaDataLayer.bound[i].dep_date : "";
 var em_flight_no  = (eBaDataLayer.bound[i].flight_numbers != undefined) ? ""+eBaDataLayer.bound[i].flight_numbers : "";;
 var em_route      = (eBaDataLayer.bound[i].route != undefined) ? ""+eBaDataLayer.bound[i].route : ""; ;
 var em_fareClass  = (eBaDataLayer.bound[i].selected_ff_name != undefined) ? ""+eBaDataLayer.bound[i].selected_ff_name : ""; ;
 var em_price      = (eBaDataLayer.bound[i].selected_ff_price != undefined) ? ""+eBaDataLayer.bound[i].selected_ff_price : "";
 var em_flights    = (eBaDataLayer.bound[i].flights.length != undefined) ? ""+eBaDataLayer.bound[i].flights.length : "";
 var em_airline    = (eBaDataLayer.bound[i].flights.length != undefined) ? ""+eBaDataLayer.bound[i].flights.length : "";
 var em_airlinesCode = (eBaDataLayer.bound[i].airlines_code != undefined) ? ""+eBaDataLayer.bound[i].airlines_code : "";
 var em_airlinesName = (eBaDataLayer.bound[i].airlines_name != undefined) ? ""+eBaDataLayer.bound[i].airlines_name : "";

 if (i =="0" && (em_rtowin == "RT" || em_rtowin == "OW" )) {
  var boundType = "OUTBOUND";
 }else if(i=="1") {
  var boundType = "INBOUND";
 }


 em_dataLayer.push({
    "journey": {
             "flights": [{
                  "boundType": boundType,
                  "priceSpecification": {
                    //"priceBeforeTaxesAndFees": 750.12,
                    "totalPrice": em_price,
                    //"taxAmount": 75.39,
                    "additionalFeesAmount": null,
                 },
                  "fareClassInput": em_fareClass,
                  "fareClass": em_pnrCabin,
                  "departureAirportIataCode": em_depAirport,
                  "arrivalAirportIataCode": em_arrAirport,
                  "departureDate": em_depDate,
                  // "estimatedDuration": "PT9H45M",
                  
                  "departureCity": {
                  "name": em_depCity,
                  "cityCode": em_depCity
                  },
                  "departureCountry": {
                    "name": em_depCountry,
                    "isoCode": em_depCountry
                  },
                  "arrivalCity": {
                    "name": em_arrCity,
                    "cityCode": em_arrCity
                  },
                  "arrivalCountry": {
                    "name": em_arrCountry,
                    "isoCode": em_arrCountry
                  },
                  
                  // "flightType": "DOMESTIC",
                  // "routeType": "CONNECTING"
                }],
                "departureDate": em_depDate,
                "returnDate": em_arrDate,
                "journeyType": em_rtowin,
                //"flightType": "DOMESTIC",
                "airline": {
                "name": em_airlinesName,
                "iataCode": em_airlinesCode
                  }
              }
          });


//Legs
for (var f = 0; f <= em_flights; f++ ) {

   var flight_dep      = (eBaDataLayer.bound[i].flights[f].departure.airport_code != undefined) ? ""+eBaDataLayer.bound[i].flights[f].departure.airport_code : "";
   var flight_arr      = (eBaDataLayer.bound[i].flights[f].arrival.airport_code != undefined) ? ""+eBaDataLayer.bound[i].flights[f].arrival.airport_code : "";
   var flight_depTime  = (eBaDataLayer.bound[i].flights[f].departure.date_time != undefined) ? ""+eBaDataLayer.bound[i].flights[f].departure.date_time : "";
   var flight_arrTime  = (eBaDataLayer.bound[i].flights[f].arrival.date_time != undefined) ? ""+eBaDataLayer.bound[i].flights[f].arrival.date_time : "";
   var flight_airline  = (eBaDataLayer.bound[i].flights[f].marketing_airline_code != undefined) ? ""+eBaDataLayer.bound[i].flights[f].arrival.marketing_airline_code : "";
   var flight_no       = (eBaDataLayer.bound[i].flights[f].arrival.marketing_flight_number != undefined) ? ""+eBaDataLayer.bound[i].flights[f].arrival.marketing_flight_number : "";
   var em_flightNumber = flight_airline + flight_no;
   var flight_route    = flight_dep +">"+flight_arr;


   em_dataLayer.push({
          "journey": { 
            "flights": [{ 
                  "legs": [{
                      "flightNumber": em_flightNumber,
                      "route": flight_route,
                      "departureAirport": {
                        "name": flight_dep,
                        "iataCode": flight_dep
                      },
                      "departureTime": flight_depTime,
                      "arrivalAirport": {
                        "name": flight_arr,
                        "iataCode": flight_arr
                      },
                      "arrivalTime": flight_arrTime,
                      // "estimatedDuration": "PT6H30M"
                    }]
               }]
             }
     });


 }


};



//Flight Time
var em_depTime =(eBaDataLayer.bound[0].flights[0].arrival.date_time != undefined) ? ""+eBaDataLayer.bound[0].flights[0].arrival.date_time : "";
var em_arrTime =(eBaDataLayer.bound[0].flights[0].departure.date_time != undefined) ? ""+eBaDataLayer.bound[0].flights[0].departure.date_time : "";
var seconds = Math.floor((em_arrTime - (em_depTime))/1000);
var minutes = Math.floor(seconds/60);
var hours = Math.floor(minutes/60);
var days = Math.floor(hours/24);
var hours = hours-(days*24);
var minutes = minutes-(days*24*60)-(hours*60);
var em_flightTime = hours + 'H' + minutes + 'M' ;


