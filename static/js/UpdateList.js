/**
 * Created by dano on 04/03/17.
 */

var options = {
  valueNames: [ 'name', 'location', 'purpose', 'centre', 'study_type', 'url', 'recruitment' ],

  item: '<div class="study-item">' +
    '<header class="study-header">' +
      '<a class="name" href="https://clinicaltrials.gov/ct2/show/NCT02386670?term=prevention+of+alzheimer%27s+disease&rank=2"></a>' +
    '</header>' +
    '<div class="study-meta">' +
      '<span class="location" href=""></span>' +
  '<span class="centre"></span>' +
  '<span class="eligibility"></span>' +
  '<span class="recruitment"></span>' +
    '</div>' +
    '<div class="study-footer">' +
      '<p class="purpose"></p>' +
    '</div>' +
    '<hr>' +
  '</div>'
};

var values = [
  {
    url: "https://clinicaltrials.gov/ct2/show/NCT02386670?term=prevention+of+alzheimer%27s+disease&rank=2",
    name: "Prevention of Alzheimer's Disease With CR Plus tDCS in Mild Cognitive Impairment and Depression (PACt-MD) (PACt-MD)",
    purpose: "This 5-year randomized controlled trial will compare the efficacy of non-invasive brain stimulation (trans-cranial Direct Current Stimulation - tDCS) combined with cognitive remediation (CR) versus sham (placebo) tDCS combined with sham (placebo) CR in slowing down cognitive decline and preventing Alzheimer's Dementia in older persons with mild cognitive impairment or major depressive disorder with or without mild cognitive impairment.",
    centre: "Centre for Addiction and Mental Health",
    location: "Toronto, Ontario, Canada, M6J 1H4",
    study_type: "Interventional",
    eligibility: "60 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Lillian Lourenco, MPH	416-535-8501 ext 30409"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT01646723?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=1",
    name: "Volunteers Adding Life in Dementia",
    purpose: "The objectives of our project are to: 1.) Develop a training program and manual for volunteers to implement evidence-based, non-pharmacological interventions for neuropsychiatric symptoms (NPS) of dementia in long-term care (LTC) settings; 2.) Recruit and train volunteers using the VALID program and pilot test the volunteer-led program with 20 individuals with Alzheimer's disease and NPS in a LTC facility in Kingston; and, 3.) Evaluate the effects of the VALID program on the symptoms of NPS, patient quality of life, volunteer's experience, and LTC staff stress.",
    centre: "Extendicare Kingston",
    location: "Kingston, Ontario, Canada, K7M6P4",
    study_type: "Interventional",
    eligibility: "65 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Luanne Halerewich  613-549-5010"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT01548053?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=2",
    name: "The Primary Care - Dementia Assessment and Treatment Algorithm",
    purpose: "Alzheimer's disease (AD) and related forms of dementia currently affect over 400,000 individuals in Canada and the numbers of community dwelling older adults with AD is rapidly growing. AD is associated with over $15 billion annually in care costs. Most individuals with AD are under the care of primary care providers (PCPs) including family physicians and primary care nurses. The evaluation and management of AD is challenging for PCPs and the quality of care provided to older adults with AD by PCP could be improved which would optimize outcomes for this vulnerable population. Provision of quality care to older adults with AD involves implementation of best practices as outlined in guidelines such as the Canadian Consensus Conference Guidelines on the Diagnosis and Treatment of Dementia. Utilizing a group of dementia researchers, PCPs, other knowledge users, and individuals affected by AD, this project will develop practical, clinically relevant resources for primary care physicians and nurses to aid in the evaluation of older adults with AD. A knowledge tool, the Primary Care - Dementia Assessment and Treatment Algorithm (DATA Tool) will be introduced into several primary care settings in Ontario using educational sessions with PCP with additional support from internet resource and a dementia care manager. The quality of dementia care provided to older adults newly diagnosed with AD will be assessed in the three years preceding the intervention compared to the year following the implementation. This project will also describe the process of knowledge exchange with PCPs, including potential barriers and facilitators of knowledge uptake and examine if the care provided during the intervention was patient-centred through interviews with patients and caregivers.Research Objectives:Develop knowledge tools to facilitate assessment and treatment of AD by PCPs based on best evidence;Transfer these knowledge tools into a variety of primary care settings in Ontario; and,Evaluate the effects of this intervention on dementia quality of care, PCP application of knowledge, and the patient-centeredness of care.",
    centre: "Queen's University",
    location: "Kingston, Ontario, Canada, K7L 3N6",
    study_type: "Interventional",
    eligibility: "60 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Dallas P Seitz, MD  613-548-5567 ext 5942"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02914366?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=3",
    name: "Ambroxol as a Treatment for Parkinson's Disease Dementia",
    purpose: "The present study will test the hypothesis that the medication Ambroxol is safe and well tolerated and will improve cognitive and motor symptoms of Parkinson's Disease Dementia (PDD). Ambroxol has been shown to raise the levels of the enzyme beta-glucocerebrosidase resulting in lower the levels of the protein alpha-synuclein, both of which have been shown to improve cognition in mouse models. This will be a 52 week trial of Ambroxol in 75 patients with PDD. Patients will undergo clinical, neuropsychological and neuroimaging assessment throughout the study to assess changes.",
    centre: "Parkwood Institute",
    location: "London, Ontario, Canada, N6C 0A7",
    study_type: "Interventional",
    eligibility: "50 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Carolina Silveira, Ph.D  519-646-6100 ext 42367"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT03020381?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=4",
    name: "Gait as Predictor of Dementia and Falls. The Gait and Brain Cohort Study",
    purpose: "Motor slowing and cognitive slowing are more prevalent as we age. Importantly, the presence of both in an older person increases their risk of having dementia by ten times. Currently, there are no clinically meaningful predictors of progression to dementia in people with mild cognitive impairment (MCI). The main hypothesis is that subtle variations in gait while performing a simple cognitive task is a reliable, easy to perform, and feasible methodology to detect those older adults at higher risk of progression to dementia and also, at higher risk of further mobility decline and falls.Rationale. The Canadian population is aging. According to recent estimates, the proportion of the population aged 65 and older will increase rapidly from 13% in 2005 to 25% by 2031. This increase in proportion is accompanied by a considerable amount of disability and subsequent dependency which has major effects on both the quality of life of older adults and their caregivers, and on the Canadian health care system. An important goal of geriatric medicine is to reduce the gap between life expectancy and disability-free life expectancy by reducing disability and dependency in the later years of life. A substantial portion of this disability stems from two major geriatric syndromes: cognitive impairment and mobility limitation. The ultimate manifestations of these syndromes are dementia and falls. Interestingly, these manifestations often coexist in elderly people: falling is a common geriatric syndrome affecting about a third of older adults each year, and dementia affects about a third of Canadians aged 80 and over. Together, dementia and falls are responsible for much of the discomfort, disability, and health care utilization in older adults and each will become more prevalent as older Canadians are expected to number approximately $9 million by 2031. The combined direct cost of dementia and falls for the Canadian Health System is over $4.9 billion per year.Establishing reliable and easy to obtain predictors to accurately identify MCI patients at highest risk of progressing to dementia is essential first, to determine who will benefit from additional and/or invasive testing and second, to implement preventative strategies, including cognitive training, physical exercises, and aggressive vascular risk factors correction to delay progression. Even a modest one-year delay in dementia incidence could save Canada $109 billion over 30 years.",
    centre: "Gait and Brain Lab, Parkwood Institute",
    location: "London, Ontario, Canada, N6C 0A7",
    study_type: "Observational",
    eligibility: "65 Years to 85 Years  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Dr. Manuel Montero Odasso  5196854292 ext 45024"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02945774?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=5",
    name: "Molecular Neuroimaging of Neuroinflammation in Neurodegenerative Dementias",
    purpose: "Neuroinflammation is increasingly implicated as a potential critical pathogenic mechanism in a variety of neurologic and psychiatric disorders. This study will use hybrid PET/MRI imaging to evaluate neuroinflammation and its relationship to cerebral perfusion in frontotemporal dementia (FTD). Patients with FTD will be recruited from the Cognitive Neurology and Aging Brain clinics at Parkwood Institute and will undergo neurocognitive assessment and MRI/PET using the PET ligand FEPPA which binds to activated microglia, a marker of neuroinflammation. Correlations will be conducted to determine whether abnormal neuroinflammation is present in Frontotemporal dementia and whether differential patterns of neuroinflammation are present in different FTD clinical and molecular subtypes, and to determine the relationship between neuroinflammation, cerebral perfusion using arterial spin labeling MRI imaging techniques, and indices of brain structure including volumetric and white matter analysis.",
    centre: "Parkwood Institute",
    location: "London, Ontario, Canada, N6C 0A7",
    study_type: "Interventional",
    eligibility: "30 Years to 95 Years  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "S Jesso, BA  519-646-6000"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT01937013?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=6",
    name: "Impact of Emotional Mimicry and Oxytocin on Frontotemporal Dementia",
    purpose: "This study will evaluate the effects on emotions and neural activity of a one time dose of intranasal oxytocin vs. placebo in patients with FTD and healthy controls.",
    centre: "Parkwood Hospital",
    location: "London, Ontario, Canada, N6C 5J1",
    study_type: "Interventional",
    eligibility: "30 Years to 85 Years  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Kristy Coleman, MSC  519-685-4242"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02774720?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=7",
    name: "Centre- Versus Home-based Exercise for MCI and Early Dementia",
    purpose: "The study is a proof-of-concept, double-blinded randomized, parallel group trial to compare the effectiveness of centre-based and home-based physical activity in helping people with MCI and early dementia meet physical activity recommendations. The primary outcome is achievement of physical activity recommendations. Secondary outcomes include cost-effectiveness and improvements in health and function.",
    centre: "Sunnybrook Research Institute",
    location: "Toronto, Ontario, Canada, M4N 3M5",
    study_type: "Interventional",
    eligibility: "50 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Lauren E Bechard, BSc  416-480-6100 ext 85420"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02541097?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=8",
    name: "Preventing Language Decline in Dementia",
    purpose: "This study will establish factors fundamental to the improvement in communication and quality of life for people with dementia known as primary progressive aphasia (PPA). PPA is a type of dementia in which language declines but other cognitive skills (including memory) are preserved in the first several years after the onset. This makes those in the initial stages of PPA excellent candidates for treatment and creates a window of time (2-7 years) whereby they can lead independent lives with minimal support. However, currently, no communication therapy is available to people with PPA due to the progressive nature of the disorder and lack of awareness of available options for professionals willing to treat it.Participants with PPA in our study will receive two kinds of therapy for the words they cannot recall spontaneously, and will be trained to maintain them through social interaction. The type of training will be based on the most successful interventions the investigators provided to people with PPA in our previous work. The investigators expect that successful re-learning of forgotten words and practicing them in a group setting will facilitate retention of communication skills leading to greater personal independence and increased/maintained quality of life for people with PPA. Our study represents natural combination of two novel approaches for PPA that ultimately will lead to lower demands on the health care system.",
    centre: "Baycrest Health Sciences",
    location: "Toronto, Ontario, Canada, M6A 2E1",
    study_type: "Interventional",
    eligibility: "Child, Adult, Senior",
    recruitment: "This study is currently recruiting participants.",
    contact: "Regina jokel  4167852500"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02955719?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=9",
    name: "CAMH - McMaster Collaborative Care Initiative For Mental Health Risk Factors In Dementia",
    purpose: "Age remains the single most significant risk factor for developing dementia, particularly Alzheimer's dementia (AD). Given the rate at which Canada's population is aging, the quest to determine modifiable risk factors, whether by prevention, earlier detection, or an ability to slow the rate of decline, is a key priority in health care. Primary care is likely to play a pivotal role in this initiative. Collaborative mental health care between primary care providers and mental health clinicians has been demonstrated to be effective at the patient and system levels. Thus, the overall goal of this project is to assess impact and feasibility of implementing a collaborative care evidence-based Integrated Care Pathway (ICP) in addressing three potentially reversible risk factors at high risk for developing AD: anxiety, depression, or mild cognitive impairment (MCI).",
    centre: "Centre for Addiction and Mental Health",
    location: "Toronto, Ontario, Canada, M6J 1H4",
    study_type: "Interventional",
    eligibility: "60 Years to 65 Years  (Adult)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Tarek Rajji, MD  416-535-8501 ext 33661"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT01903421?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=10",
    name: "Inhalational Anesthesia and Precipitation of Dementia: is There a Link?",
    purpose: "Many elderly patients undergoing surgical procedures already have impaired cognitive (memory/concentration) status. Patients with pre-existing cognitive impairment, or dementia, may benefit from modified anesthesia techniques. It is estimated that one in eight people age 65 and older has Alzheimer's disease. More so, nearly half of people that are 85 years or older have Alzheimer's disease. Currently, both spinal (regional) and inhalational (general) anesthesia, are used in patients undergoing common urological, orthopedic, and general surgical procedures. Inhalational anesthesia has been associated with higher risk of memory impairment in experimental (animal) and human studies. However, currently, there are simply no large or good enough studies to be sure that inhalational anesthesia is responsible for causing dementia and Alzheimer's disease.The proposed study investigates if elderly patients (65 years and older) undergoing spinal anesthesia (patient is awake or slightly sedated) are less likely to develop dementia and Alzheimer's disease for up to 2 years after surgery, when compared to inhalational anesthesia (patient is kept asleep with gas anesthetic). The investigators will also test all patients for the presence of apolipoprotein (ApoE-\\xce\\u03bc4 type of gene that is present in 15-20% of patients), and beta-amyloid tau protein (present in cerebrospinal fluid) that are known risk factors for Alzheimer's disease. The particular strength of this study is that it takes into account whether the frequency and/or severity of dementia and Alzheimer's disease is different in patients with and without these markers. The investigators believe that this study will make a major contribution to better understanding of development of Alzheimer's disease.",
    centre: "Toronto General Hospital, University Health Network",
    location: "Toronto, Ontario, Canada, M5G 2C4",
    study_type: "Interventional",
    eligibility: "65 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "George Djaiani, MD  416-340-4800 ext 6205"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02969499?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=11",
    name: "Safety and Efficacy of ECT for BPSD",
    purpose: "This is a prospective, open-label, observational study of the efficacy and safety of ECT for BPSD. There is no control or comparison group. Subjects will be compared on outcome measures pre- and post-ECT (and/or with a repeated measures design). Target sample size is 30 subjects over three years",
    centre: "Vancouver General Hospital",
    location: "Whitby, Ontario, Canada, L1N 5S9",
    study_type: "Observational",
    eligibility: "Child, Adult, Senior",
    recruitment: "This study is not yet open for participant recruitment.",
    contact: "Not Recruiting"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02428387?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=12",
    name: "",
    purpose: "With the number of Canadians with Alzheimer's disease and related dementias (ADRD) growing, supporting family care partners of persons with ADRD is critical. Family caregivers provide about 90 per cent of in-home care for persons with ADRD, and the care is often difficult due to co-morbidities in persons with ADRD. Family caregivers of older persons with ADRD and multiple chronic conditions (MCC) experience significant, complex, distressing transitions such as changes to their environment, roles and relationships, physical and mental health, isolation, and taking on new tasks. An online Transition Toolkit (My Tools 4 Care) was developed for family caregivers of persons with ADRD and MCC living at home, to support caregivers through transitions and increase their self-efficacy, hope, and quality of life (QOL).Through this pragmatic mixed methods randomized controlled trial the investigators expect to find that family caregivers receiving the online My Tools 4 Care Toolkit will show greater improvement in hope, self-efficacy and QOL, at no additional cost from a societal perspective, compared with those in an educational control group. Following baseline data collection 180 participants will be randomly assigned to one of the groups with repeated measures at one, three and six months.",
    centre: "University of Alberta",
    location: "Hamilton, Ontario, Canada, L8S 4K1",
    study_type: "Interventional",
    eligibility: "18 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Jenny Ploeg, PhD  905-525-9140 ext 22294"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02205710?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=13",
    name: "Cognitive Training in Aging",
    purpose: "Cognitive training has emerged as a promising method to maintain, enhance, and rehabilitate cognitive function in older adults and individuals with dementia. In recent years, such training has become particularly appealing in the clinical context, with many paradigms aimed specifically at adults experiencing various stages of cognitive decline due to Mild Cognitive Impairment, Alzheimer's disease, and vascular dementias. However, basic questions remain. For example, uncertainty persists regarding factors that influence observed improvements as well as the conditions that would maximize transfer and sustainability of training effects. The objective of this study is to evaluate factors that may maximize the benefits of computerized cognitive training in older adults.",
    centre: "Bruyere Continuing Care",
    location: "Ottawa, Ontario, Canada, K1N 5C8",
    study_type: "Interventional",
    eligibility: "60 Years and older  (Adult, Senior)",
    recruitment: "This study is not yet open for participant recruitment.",
    contact: "Not Recruiting"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT01935024?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=14",
    name: "Benefits of Exercise in Alzheimer's Disease",
    purpose: "Exercise has been shown to be beneficial for the brain. The investigators would like to test this specifically for those diagnosed with Alzheimer's disease. This study will involve 30 randomized patients to take part in the out-patient exercise program and 30 patients to continue with their regular activities over a 6-month period. Once that period is over, half of the 30 patients who participated in the outpatient exercise program will continue in the program and the other half will be randomized to independently continue to exercise. The investigators hypothesize that exercising will benefit the patient by slowing the dementia process, improving behavioral symptoms, and decreasing volume loss of certain brain regions. Each person will perform personalized exercise regimens, MR imaging and neuropsychological tests will be used to measure the benefits of exercise. Ultimately, the hope is that the results of this study could be used to facilitate exercise programs for patients. Enrollment is completely voluntary and all personal data obtained will remain confidential.",
    centre: "Toronto Western Hospital",
    location: "Toronto, Ontario, Canada, M5T 2S8",
    study_type: "Interventional",
    eligibility: "60 Years to 95 Years  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Carmela Tartaglia, MD, FRCPC  416-603-5483"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02524405?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=15",
    name: "BEAM: Brain-Eye Amyloid Memory Study",
    purpose: "The main objectives for this study are:To investigate three novel, non-invasive ocular measurements in a cross-sectional study of participants with various neurodegenerative dementias against standard cognitive assessments and brain imaging measures; andTo assess the potential utility of ocular assessments for early detection in the pre-dementia, i.e. the so-called Mild Cognitive Impairment (MCI) stage.",
    centre: "Sunnybrook Health Sciences Centre",
    location: "Toronto, Ontario, Canada, M4N 3M5",
    study_type: "Observational",
    eligibility: "50 Years to 90 Years  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Nazanin Barkhordari, BSc  416-480-6100 ext 85281"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02330510?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=16",
    name: "Amyloid and Glucose PET Imaging in Alzheimer and Vascular Cognitive Impairment Patients With Significant White Matter Disease",
    purpose: "The prevalence of both Alzheimer's Disease (AD) and stroke doubles each decade over 65 years old. Both are major causes of dementia, currently estimated to affect 46 million people worldwide. The current costs globally are $818 billion. Additionally, in population studies elders over 65 years, \"covert\" cerebral small vessel disease appears on MRI scans as silent lacunar infarcts in 25% as Microbleeds in 10%, and as focal or diffuse 'incidental' white matter disease (WMD) in 95%. WMD is extensive in 20%, with a clinical threshold effect around 10cc2. Small vessel disease is even more common in dementia, often coexisting with AD and independently contributing to cognitive decline and progression to dementia. Longitudinal imaging using cerebral amyloid labeling opens a new opportunity to understand the additive/interactive effects of small vessel disease and AD.The design of this study includes recruitment of two cohorts, including Mild Cognitive Impairment (MCI) and/or early Alzheimer Disease subjects from memory clinics and subjects with strokes/TIA from stroke prevention clinics. Inclusion criteria include the presence of moderate/extensive white matter disease, eg. Fazekas score of 2 (with confluent peri-ventricular hyperintensities) or Fazekas score of 3, as determined by previous MR or CT, &gt; 60 years of age, Mini-Mental Status Exam (MMSE) scores \\u2265 20. Subjects will undergo 3T structural MRI (including T1, PD/T2, FLAIR, GRE, DTI, ASL, and resting state fMRI), glucose PET, amyloid PET (using AV-45 florbetapir) and neuropsychological testing, as well as blood sampling. Repeat MR and PET/CT imaging and neuropsychological testing will be conducted at 24 months. The imaging portion is designed to closely parallel the Alzheimer's Disease Neuroimaging Initiative (ADNI) in order to benefit from the availability of both cognitively normal controls (NC), MCI and Alzheimer's disease subjects with minimal WMD.",
    centre: "Sunnybrook Health Sciences Centre",
    location: "Toronto, Ontario, Canada, M4N 3M5",
    study_type: "Observational",
    eligibility: "60 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Maryam Niapour, PhD"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02068391?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=17",
    name: "Recovery Improved in Covert Stroke With Exercise",
    purpose: "Silent ischemic, also known as \"covert stroke vascular disease\" (CSVD), contributes to neurological deficits that are caused by damage to small blood vessels in the brain. CSVD occurs six to ten times more often that an acute stroke. It is misleading to think, however, that CSVD is an inevitable part of \"getting old\" because people with CSVD are at high risk of developing an acute stroke or dementia. In fact, people with more CSVD lesion volume are more likely to develop day to day problems in planning, decision-making and speed of thinking. Unfortunately, there are no proven therapies designed to address CSVD. We propose to test whether aerobic exercise is an intervention that can combat CSVD because the disease is fundamentally a blood flow problem that may be improved by aerobic exercise. We will recruit CSVD adults with moderate to severe lesion burden and use magnetic resonance imaging (MRI) to study the brain in terms of structure, perfusion and function. Participants will be randomly assigned to either our established aerobic exercise program or a control stretching program. Both groups will take part in lab exercise sessions, which are designed to monitor progress and assess adherence to the program. The duration and intensity of their exercise will increase as participants progress. We will use activity log books, phone calls and extra \"booster\" exercise sessions, as needed, to maximize retention and adherence. We aim to show that aerobic exercise increases cerebral blood flow (CBF) in frontal-subcortical grey matter, supports regional tissue growth, and improves cognitive function in CSVD adults with substantial risk of acute stroke and dementia. A positive outcome of this research will provide strong support for additional clinical trials aimed at sustaining cognition and maintaining independent living.",
    centre: "Sunnybrook Health Sciences Centre",
    location: "Toronto, Ontario, Canada, M4N 3M5",
    study_type: "Interventional",
    eligibility: "50 Years to 95 Years  (Adult, Senior)",
    recruitment: "This study is not yet open for participant recruitment.",
    contact: "Not Recruiting"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02212366?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=18",
    name: "To Enhance Cognition in Late Life Depression Using Transcranial Direct Current Stimulation",
    purpose: "Late Life Depression (LLD) is a serious health problem which not only causes depressed mood but also results in impairments in memory and attention. These impairments are likely to be resistant to treatment, which increases the chances of developing dementia even after successful treatment of mood.This study is a randomized controlled trial of transcranial Direct Current Stimulation (tDCS) in people with LLD to enhance their cognition after successful treatment of mood with established medications. tDCS is non invasive, relatively inexpensive and portable, and has been found to be safe.This study also serves as a pilot study to assess the effects of tDCS on cognition and neurophysiologic markers of cognition among patients with LLD. Primary study hypothesis is that participants Participants randomized to tDCS will perform better on a working memory task 2 weeks and 3 months following the tDCS course.",
    centre: "Center for Addiction and Mental Health",
    location: "Toronto, Ontario, Canada, M6J1H4",
    study_type: "Interventional",
    eligibility: "60 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Sanjeev Kumar, MD"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT02426983?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=19",
    name: "Pilot Study Using an NMDA Antagonist to Modulate Transcranial Direct Current Stimulation (tDCS) Effects on Sensory Discrimination",
    purpose: "Transcranial direct current stimulation (tDCS) is a non-invasive form of brain stimulation which uses a very weak constant current to temporarily excite the brain area of interest via small electrodes placed on the scalp. Currently, tDCS is being used as a tool to investigate mental processes (cognition) and motor function (movement) in healthy controls and to treat neurological (i.e. stroke) and psychiatric (i.e. depression and dementia) patients. tDCS has been found to improve motor processes and cognitive performance, including attention and memory functions. This study will attempt to examine the effects of tDCS on a specific aspect of short term memory to sounds measured from electrical activity (EEG) from the top of the scalp. This study will also assess the effect of a drug, dextromethorphan (DMO), commonly found in cough syrup, which is thought to regulate tDCS treatment through brain receptors. The study involves four laboratory test sessions. EEG assessments will be done in two sessions involving 'anodal' tDCS stimulation (to temporarily excite cortical activity locally), one session with DMO treatment and one with placebo treatment, and two sessions involving 'sham' tDCS stimulation (device is turned off), with the same DMO and placebo treatments. These findings will contribute to our understanding of the brain chemistry involved in tDCS treatment and its effects on cognitive abilities.",
    centre: "University of Ottawa",
    location: "Ottawa, Ontario, Canada, K1Z 7K4",
    study_type: "Interventional",
    eligibility: "18 Years to 35 Years  (Adult)",
    recruitment: "This study is not yet open for participant recruitment.",
    contact: "Not Recruiting"
  },
  {
    url: "https://clinicaltrials.gov//ct2/show/NCT01112813?term=Dementia&amp;recr=Open&amp;cntry1=NA%3ACA&amp;state1=NA%3ACA%3AON&amp;rank=20",
    name: "The Neurotrophic Effects of Lithium Carbonate Following Stroke: A Feasibility Study",
    purpose: "Stroke is the leading cause of adult disability and the third leading cause of death in Canada. Most stroke survivors live with residual impairments that diminish independence and quality of life. This may include vascular cognitive impairment (loss of ability to plan, think and reason) which can lead to dementia and loss of mental and functional independence.The current treatment to reduce stroke induced brain tissue injury is limited to thrombolytics (clot busters), a therapy useful only if given in the first hours following stroke. One major new approach aims to reduce cell death after stroke by targeting the ongoing tissue loss initiated by the stroke. The tissue can be maintained by interfering with later neurochemical processes that are activated by stroke, potentially through activating natural substances in the brain that help survival and growth of nerve cells (\"neurotrophic\" factors).The recent recognition of lithium as a neurotrophic agent has generated the first studies of lithium treatment for managing brain diseases. Clinically, lithium has now been shown to increase brain gray matter volume in bipolar patients. This effect is potentially important in stroke because gray matter loss has been implicated in the development of cognitive impairment after stroke, a result of the series of brain processes that are activated by lack of oxygen due to stroke. Our primary objective is to examine the effects of lithium on total brain gray matter volume in the post-stroke population, as measured by volumetric magnetic resonance imaging (MRI) with the hope that lithium may increase gray matter volume in post-stroke patients and lead to greater cognitive and functional rehabilitation. This study will provide valuable information on the tolerability of lithium, and its effects on clinical outcomes relevant to stroke, providing the information needed for designing a large-scale clinical trial.",
    centre: "Sunnybrook Health Sciences Centre",
    location: "Toronto, Ontario, Canada, M5M1P3",
    study_type: "Interventional",
    eligibility: "40 Years and older  (Adult, Senior)",
    recruitment: "This study is currently recruiting participants.",
    contact: "Janelle A Bradley, BSc  416-480-6100 ext 3185"
  }
]

var trialsList = new List('study-list', options, values);

function placeVisibleMarkers () {
  //deleteMarkers();

  // Loops through every visible trial in list
  trialsList.matchingItems.forEach(function (item) {

    // Places request
    var request = {
      location: map.getCenter(),
      radius: '1000',
      query: item.values().centre
    };

    // Checks that the PlacesServiceStatus is OK, and adds a marker
    // using the place ID and location from the PlacesService.
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        addMarker(results, item.values().url);
        setMapOnAll(map);
      }
    }

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  });

}

trialsList.on('updated', function () {
  placeVisibleMarkers();
});




