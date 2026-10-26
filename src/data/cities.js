// Every city with its own page. This drives the city routes, the "Areas of Service" navbar menu, the redirects
// from the old site's .html URLs and the phone number shown on each city page.
//
// To add a city, add it to its county below: `path` is its URL, `name` is how it's displayed, and `legacyPath`
// is only needed if the old site had a page for it.

const laVentura = { display: '(323) 876-5816', tel: '+13238765816' };
const orangeCounty = { display: '(949) 497-8811', tel: '+19494978811' };

export const counties = [
    {
        name: 'Los Angeles County',
        phone: laVentura,
        cities: [
            { path: '/losangeles', name: 'Los Angeles', legacyPath: '/valet_parking_services.html' },
            { path: '/hollywood', name: 'Hollywood' },
            { path: '/beverlyhills', name: 'Beverly Hills', legacyPath: '/beverly_hills_valet_parking.html' },
            { path: '/beverlypark', name: 'Beverly Park' },
            { path: '/belair', name: 'Bel Air', legacyPath: '/bel_air_valet_parking.html' },
            { path: '/brentwood', name: 'Brentwood', legacyPath: '/brentwood_valet_parking.html' },
            { path: '/palisades', name: 'Pacific Palisades', legacyPath: '/pacific_palisades_valet_parking.html' },
            { path: '/santamonica', name: 'Santa Monica' },
            { path: '/pasadena', name: 'Pasadena', legacyPath: '/pasadena_valet_parking.html' },
            { path: '/sanmarino', name: 'San Marino' },
            { path: '/lacanada', name: 'La Canada Flintridge', legacyPath: '/la_canada_flintridge_valet_parking.html' },
        ],
    },
    {
        name: 'Ventura County',
        phone: laVentura,
        cities: [
            { path: '/malibu', name: 'Malibu', legacyPath: '/malibu_valet_parking.html' },
            { path: '/thousandoaks', name: 'Thousand Oaks', legacyPath: '/thousand_oaks_valet_parking.html' },
            { path: '/hiddenhills', name: 'Hidden Hills' },
            { path: '/westlakevillage', name: 'Westlake Village', legacyPath: '/westlake_village_valet_parking.html' },
            { path: '/northranch', name: 'North Ranch', legacyPath: '/north_ranch_valet_parking.html' },
        ],
    },
    {
        name: 'Orange County',
        phone: orangeCounty,
        cities: [
            { path: '/irvine', name: 'Irvine' },
            { path: '/lagunabeach', name: 'Laguna Beach', legacyPath: '/laguna_beach_valet_parking.html' },
            { path: '/newportcoast', name: 'Newport Coast' },
            { path: '/newportbeach', name: 'Newport Beach', legacyPath: '/newport_beach_valet_parking.html' },
            { path: '/emeraldbay', name: 'Emerald Bay', legacyPath: '/emerald_bay_valet_parking.html' },
            { path: '/coronadelmar', name: 'Corona del Mar' },
            { path: '/cotodecaza', name: 'Coto de Caza' },
            { path: '/pelicanhill', name: 'Pelican Hill', legacyPath: '/pelican_hill_valet_parking.html' },
            { path: '/danapoint', name: 'Dana Point', legacyPath: '/dana_point_valet_parking.html' },
        ],
    },
    {
        name: 'South Bay',
        phone: laVentura,
        cities: [
            { path: '/manhattanbeach', name: 'Manhattan Beach', legacyPath: '/manhattan_beach_valet_parking.html' },
            { path: '/palosverdes', name: 'Palos Verdes', legacyPath: '/palos_verdes_valet_parking.html' },
            { path: '/rollinghills', name: 'Rolling Hills' },
            { path: '/longbeach', name: 'Long Beach', legacyPath: '/long_beach_valet_parking.html' },
        ],
    },
];

// Flat list, with each city's county attached
export const cities = counties.flatMap(county => county.cities.map(city => ({ ...city, county })));
