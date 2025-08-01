
var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Kanal İstanbul / Canal Istanbul',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '1',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
               center: [28.793,41.149],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
              center: [28.710,41.319],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
              center: [28.710,41.319],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '4',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/4nh31SN4/MEF-AAP-027-BAP-PART-II-2025-07-31-20-37-12.png',
            description: '',
            location: {
              center: [28.661,41.249],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: '5',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Dgbb0hWf/MEF-AAP-027-BAP-PART-II-2025-07-31-21-24-17.png',
            description: '',
            location: {
              center: [28.646,41.188],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }, {
            id: '6',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/sJtwsGgx/MEF-AAP-027-BAP-PART-II-2025-08-01-07-28-27.png',
            description: '',
            location: {
              center: [28.721,41.108],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '7',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/hxWm67jY/MEF-AAP-027-BAP-PART-II-2025-07-29-10-04-43.png',
            description: '',
            location: {
                 center: [28.741,41.070],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '8',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/gLGz5PMs/MEF-AAP-027-BAP-PART-II-2025-07-29-09-45-15.png',
            description: '',
            location: {
                 center: [28.750,41.001],
                zoom: 12,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/wNnF7cdS/MEF-AAP-027-BAP-PART-II-2025-07-29-09-45-30.png',
            description: '',
            location: {
                center: [28.758,40.994],
                zoom: 12,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'right',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/k2m1wtkN/MEF-AAP-027-BAP-PART-II-2025-08-01-07-49-24.png',
            description: '',
            location: {
                center: [28.767,40.976],
                zoom: 12,
                pitch: 10,
                bearing: 0,
               
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
             mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
     
     
       
    ]
};
