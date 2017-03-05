/**
 * Created by dano on 04/03/17.
 */

var options = {
  valueNames: [ 'name', 'location', 'purpose' ],

  item: '<div class="study-item">' +
    '<header class="study-header">' +
      '<a class="name" href=""></a>' +
    '</header>' +
    '<div class="study-meta">' +
      '<span class="location" href=""></span>' +
    '</div>' +
    '<div class="study-footer">' +
      '<p class="purpose"></p>' +
    '</div>' +
    '<hr>' +
  '</div>'
};

var values = [{name: 'Phase 3 Study of Aducanumab (BIIB037) in Early Alzheimers Disease (EMERGE)',
  location:  'Toronto Western Hospital Recruiting ',
  purpose:'The primary objective of the study is to evaluate the efficacy of monthly doses of aducanumab in slowing cognitive and functional impairment as measured by changes in the Clinical Dementia Rating-Sum of Boxes (CDR-SB) score as compared with placebo in participants with early AD. Secondary objectives are to assess the effect of monthly doses of aducanumab as compared with placebo on clinical progression as measured by Mini-Mental State Examination (MMSE), AD Assessment Scale-Cognitive Subscale (13 items) [ADAS-Cog 13], and AD Cooperative Study-Activities of Daily Living Inventory (Mild Cognitive Impairment version) [ADCS-ADL-MCI].'},
  {name: '4-Repeat Tauopathy Neuroimaging Initiative - Cycle 2 (4RTNI-2)',
    location:  'University of Toronto',
    purpose:'The goal of this study is to identify the most reliable methods of analysis for tracking CBD, PSP, and o/vPSP over time. The results from this study may be used in the future to calculate statistical power for clinical drug trials. The study will also provide information about the relative value of novel imaging techniques for diagnosis, as well as the value of imaging techniques versus testing of blood, urine, and cerebrospinal fluid (CSF) biomarkers.'},
  {name: 'Advancing Research and Treatment for Frontotemporal Lobar Degeneration (ARTFL) (ARTFL)',
    location:  'University of Toronto',
    purpose:'Frontotemporal Lobar Degeneration (FTLD) is the neuropathological term for a collection of rare neurodegenerative diseases that correspond to four main overlapping clinical syndromes: frontotemporal dementia (FTD), primary progressive aphasia (PPA), corticobasal degeneration syndrome (CBS) and progressive supranuclear palsy syndrome (PSPS). The goal of this study is to build a FTLD clinical research consortium to support the development of FTLD therapies for new clinical trials. The consortium, referred to as Advancing Research and Treatment for Frontotemporal Lobar Degeneration (ARTFL), will be headquartered at UCSF and will partner with six patient advocacy groups to manage the consortium. Participants will be evaluated at 14 clinical sites throughout North America and a genetics core will genotype all individuals for FTLD associated genes.'}
];

var trialsList = new List('study-list', options, values);

function placeVisibleMarkers () {
  deleteMarkers();

  // Loops through every visible trial in list
  trialsList.visibleItems.forEach(function (item) {

    // Places request
    var request = {
      location: map.getCenter(),
      radius: '500',
      query: item.values().location
    };

    // Checks that the PlacesServiceStatus is OK, and adds a marker
    // using the place ID and location from the PlacesService.
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        addMarker(results);
      }
    }

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  });

}

trialsList.on('updated', function () {
  placeVisibleMarkers();
});




