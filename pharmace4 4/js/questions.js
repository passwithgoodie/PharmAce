// PharmAce — Real PEBC Question Bank
// PharmAce curated question bank

const QUESTION_BANK = [

  // ── CARDIOLOGY & ANTICOAGULATION ──────────────────────────────────────────
  {
    id: 1, topic: "Cardiology", difficulty: "Intermediate",
    stem: "A 68-year-old man with heart failure (EF 32%) and CKD (eGFR 28 mL/min) is started on an ACE inhibitor. Which parameter is most important to monitor in the first week?",
    options: ["Serum potassium and creatinine", "Fasting blood glucose", "Liver enzymes (AST/ALT)", "Complete blood count (CBC)"],
    correct: 0,
    explanation: "ACE inhibitors reduce aldosterone secretion → potassium retention (hyperkalemia risk) and can cause a transient creatinine rise. With eGFR 28, this is especially dangerous. Hold if K+ >5.5 mmol/L or creatinine rises >30% from baseline.",
    ref: "Canadian Cardiovascular Society HF Guidelines 2021"
  },
  {
    id: 2, topic: "Cardiology", difficulty: "Intermediate",
    stem: "A patient with atrial fibrillation is on a beta-blocker and ACE inhibitor. For stroke prevention, what should be added?",
    options: ["Aspirin 81mg daily", "A DOAC (e.g., apixaban or rivaroxaban)", "Furosemide", "Clopidogrel"],
    correct: 1,
    explanation: "AFib requires anticoagulation (DOAC or warfarin) for stroke prevention based on CHA₂DS₂-VASc score. ASA alone is inferior and not recommended. DOACs are preferred over warfarin for non-valvular AFib due to simpler monitoring.",
    ref: "CCS AFib Guidelines 2020"
  },
  {
    id: 3, topic: "Cardiology", difficulty: "Advanced",
    stem: "A post-STEMI patient on ticagrelor and aspirin is also taking rifampin for latent TB. What is the most significant concern?",
    options: ["Increased ticagrelor toxicity", "Reduced ticagrelor efficacy due to CYP3A4 induction", "Elevated aspirin levels causing GI bleeding", "No significant interaction — safe to co-prescribe"],
    correct: 1,
    explanation: "Rifampin is a potent CYP3A4 inducer. Ticagrelor is a CYP3A4 substrate. Co-administration reduces ticagrelor levels by up to 86%, rendering it ineffective post-STEMI. Strong CYP3A4 inducers are contraindicated with ticagrelor per Health Canada.",
    ref: "Brilinta Product Monograph"
  },
  {
    id: 4, topic: "Anticoagulation", difficulty: "Intermediate",
    stem: "A patient wants an anticoagulant for VTE that requires minimal monitoring. Which is the best choice?",
    options: ["Warfarin", "Unfractionated heparin", "Edoxaban", "Apixaban"],
    correct: 3,
    explanation: "Apixaban (DOAC) requires no routine INR monitoring — only periodic renal function checks. Warfarin requires regular INR. Edoxaban requires 5–10 days of parenteral anticoagulation first. Apixaban can be started orally immediately.",
    ref: "Canadian Pharmacy Practice Guidelines"
  },
  {
    id: 5, topic: "Anticoagulation", difficulty: "Advanced",
    stem: "A patient with a mechanical mitral valve needs anticoagulation. Which agent is indicated?",
    options: ["Apixaban", "Rivaroxaban", "Warfarin (INR 2.5–3.5)", "Dabigatran"],
    correct: 2,
    explanation: "DOACs are CONTRAINDICATED in mechanical heart valves. The RE-ALIGN trial was stopped early due to excess thromboembolic events with dabigatran. Warfarin is the only approved anticoagulant for mechanical valves. Target INR for mechanical mitral valve: 2.5–3.5.",
    ref: "CCS Valvular Guidelines"
  },
  {
    id: 6, topic: "Anticoagulation", difficulty: "Intermediate",
    stem: "When switching a patient FROM apixaban TO warfarin, when should warfarin be initiated?",
    options: ["Start warfarin the same day apixaban is stopped", "Start warfarin when INR is less than 2 while still on apixaban", "Wait 48 hours after stopping apixaban before starting warfarin", "Start warfarin 5 days before stopping apixaban"],
    correct: 1,
    explanation: "When switching from apixaban to warfarin, start warfarin while still on apixaban. Continue apixaban until INR is in therapeutic range (≥2.0) to prevent a gap in anticoagulation. Monitor INR closely.",
    ref: "Recall Q2"
  },

  // ── INFECTIOUS DISEASE ────────────────────────────────────────────────────
  {
    id: 7, topic: "Infectious disease", difficulty: "Intermediate",
    stem: "A patient with penicillin allergy has a COPD exacerbation with purulent sputum and increased dyspnea. What antibiotic is most appropriate?",
    options: ["Amoxicillin-clavulanate", "Levofloxacin 500mg daily × 5 days", "Cephalexin", "Clindamycin"],
    correct: 1,
    explanation: "In complicated COPD exacerbation (FEV1 <50%, ≥4 exacerbations/year, or recent antibiotic use) with penicillin allergy, a respiratory fluoroquinolone (levofloxacin or moxifloxacin) is the preferred choice. Levofloxacin covers typical and atypical organisms.",
    ref: "Q13"
  },
  {
    id: 8, topic: "Infectious disease", difficulty: "Intermediate",
    stem: "Single-dose treatment of uncomplicated chlamydia infection is:",
    options: ["Doxycycline 100mg BID × 7 days", "Azithromycin 1g orally once", "Cephalexin 500mg × 3 days", "Amoxicillin 500mg TID × 7 days"],
    correct: 1,
    explanation: "Azithromycin 1g orally as a single dose is the classic single-dose treatment for chlamydia. Doxycycline 100mg BID × 7 days is now preferred for efficacy (especially rectal chlamydia), but when the stem asks for 'single dose', the answer is azithromycin 1g.",
    ref: "PHAC STI Guidelines"
  },
  {
    id: 9, topic: "Infectious disease", difficulty: "Intermediate",
    stem: "Hot tub folliculitis is caused by which organism and how is it managed?",
    options: ["Staphylococcus aureus — treat with cephalexin × 7 days", "Pseudomonas aeruginosa — usually self-limiting; ciprofloxacin for severe cases", "Streptococcus pyogenes — treat with penicillin VK", "Candida albicans — treat with topical clotrimazole"],
    correct: 1,
    explanation: "Hot tub folliculitis is caused by Pseudomonas aeruginosa from contaminated water. It is usually self-limiting, resolving in 7–10 days. Ciprofloxacin covers Pseudomonas and is used for severe or immunocompromised cases.",
    ref: "Canadian Pharmacy Practice Guidelines"
  },
  {
    id: 10, topic: "Infectious disease", difficulty: "Advanced",
    stem: "A 60-year-old patient with meningitis is already on ceftriaxone and vancomycin. What should be added?",
    options: ["Dexamethasone only", "Ampicillin to cover Listeria monocytogenes", "Gentamicin for synergy", "Metronidazole for anaerobic coverage"],
    correct: 1,
    explanation: "In patients ≥50 years or immunocompromised, Listeria monocytogenes is a significant cause of bacterial meningitis and is NOT covered by ceftriaxone or vancomycin. Ampicillin must be added. The cut-off is typically age 50.",
    ref: "Canadian Pharmacy Practice Guidelines"
  },
  {
    id: 11, topic: "Infectious disease", difficulty: "Intermediate",
    stem: "A patient with bacterial vaginosis is 16 weeks pregnant. What is the most appropriate treatment?",
    options: ["Avoid all treatment until after delivery", "Metronidazole 500mg PO BID × 7 days", "Clindamycin vaginal cream only", "Fluconazole 150mg single dose"],
    correct: 1,
    explanation: "Metronidazole is safe throughout pregnancy including the first trimester — older guidance cautioning against first-trimester use has been refuted. Metronidazole 500mg BID × 7 days is the treatment of choice for BV in pregnancy.",
    ref: "SOGC Guidelines"
  },
  {
    id: 12, topic: "Infectious disease", difficulty: "Intermediate",
    stem: "A patient has a painless genital ulcer with features consistent with syphilis. What is the treatment and contact tracing window?",
    options: ["Azithromycin 1g × single dose; trace back 1 month", "Benzathine penicillin G single dose; trace back 3 months", "Doxycycline 14 days; trace back 6 months", "Ceftriaxone IV × 14 days; trace back 1 year"],
    correct: 1,
    explanation: "Primary syphilis is treated with benzathine penicillin G IM single dose (or doxycycline 14 days if PCN allergic). For primary syphilis, sexual contacts from the past 3 months should be traced and treated.",
    ref: "Q46; PHAC STI Guidelines"
  },

  // ── ENDOCRINOLOGY & DIABETES ──────────────────────────────────────────────
  {
    id: 13, topic: "Endocrinology", difficulty: "Intermediate",
    stem: "A type 2 diabetic on basal-bolus insulin + metformin + GLP-1 has consistently high fasting glucose before meals. What should be adjusted?",
    options: ["Increase bolus (mealtime) insulin dose", "Increase basal insulin dose", "Add a sulfonylurea", "Reduce metformin dose"],
    correct: 1,
    explanation: "Consistently elevated fasting (pre-meal) glucose reflects inadequate basal insulin coverage overnight. The basal insulin dose should be increased. High post-meal glucose would indicate need to adjust bolus insulin. This is a classic PEBC-tested insulin management principle.",
    ref: "Diabetes Canada 2023"
  },
  {
    id: 14, topic: "Endocrinology", difficulty: "Intermediate",
    stem: "A diabetic patient has diarrhea for 24 hours. Which drug should be held primarily to prevent acute kidney injury?",
    options: ["Metformin", "Candesartan (ARB)", "Glipizide", "Sitagliptin"],
    correct: 1,
    explanation: "SADMANS sick-day rule: hold ARBs/ACEi during volume depletion as they reduce renal perfusion (block efferent arteriole dilation → ↓GFR). Candesartan is the primary AKI risk. Metformin is held for lactic acidosis risk. If forced to choose one for AKI prevention specifically: ARB.",
    ref: "Q30"
  },
  {
    id: 15, topic: "Endocrinology", difficulty: "Intermediate",
    stem: "A 55-year-old patient with eGFR 18 mL/min is diagnosed with type 2 diabetes. What is the most appropriate action regarding metformin?",
    options: ["Start at full dose — no adjustment needed", "Start at half dose with monthly renal monitoring", "Metformin is contraindicated — select an alternative agent", "Start only if eGFR improves above 30"],
    correct: 2,
    explanation: "Metformin is contraindicated when eGFR <30 mL/min due to lactic acidosis risk from drug accumulation. With eGFR 18, an alternative agent should be selected — a renally-adjusted DPP-4 inhibitor (e.g., sitagliptin 25mg) is often chosen.",
    ref: "Diabetes Canada 2023; Health Canada Monograph"
  },
  {
    id: 16, topic: "Endocrinology", difficulty: "Intermediate",
    stem: "Explain the Somogyi effect and how is it managed?",
    options: ["Morning hyperglycemia from cortisol rise — increase basal insulin", "Rebound hyperglycemia from nocturnal hypoglycemia — decrease evening insulin + bedtime snack", "Post-meal hyperglycemia — increase bolus insulin", "Hyperglycemia from glucagon surge — add a GLP-1 agonist"],
    correct: 1,
    explanation: "The Somogyi effect is rebound morning hyperglycemia caused by nocturnal hypoglycemia triggering counterregulatory hormones (glucagon, cortisol). Management: decrease nighttime insulin dose and/or add a bedtime snack. Distinguish from Dawn phenomenon (morning hyperglycemia without preceding hypoglycemia).",
    ref: "Canadian Pharmacy Practice Guidelines"
  },

  // ── PSYCHIATRY ────────────────────────────────────────────────────────────
  {
    id: 17, topic: "Psychiatry", difficulty: "Intermediate",
    stem: "A 32-year-old stable on lithium 900mg/day presents with vomiting and diarrhea for 3 days. Lithium level is 1.8 mmol/L (therapeutic: 0.6–1.2). What is the most appropriate next step?",
    options: ["Continue current dose, repeat level in 1 week", "Reduce dose by 50%, recheck in 3 days", "Hold lithium and initiate IV fluids; monitor closely", "Switch to valproate immediately"],
    correct: 2,
    explanation: "This is lithium toxicity precipitated by volume depletion from GI losses. Lithium is renally cleared — dehydration drastically reduces clearance. Hold lithium immediately and give IV normal saline to restore renal perfusion and enhance lithium excretion.",
    ref: "CAMH Lithium Toxicity Protocol"
  },
  {
    id: 18, topic: "Psychiatry", difficulty: "Intermediate",
    stem: "A patient is taking clozapine for treatment-resistant schizophrenia and recently quit smoking. What action is needed for clozapine dosing?",
    options: ["Increase the clozapine dose — smoking induces CYP1A2", "Reduce the clozapine dose — smoking cessation increases clozapine levels", "No dose change needed", "Switch to a different antipsychotic"],
    correct: 1,
    explanation: "Smoking induces CYP1A2, which metabolizes clozapine. When a patient stops smoking, CYP1A2 induction decreases, clozapine levels can nearly double → toxicity risk. Reduce clozapine dose when patient stops smoking. Monitor closely.",
    ref: "Clozapine Product Monograph"
  },
  {
    id: 19, topic: "Psychiatry", difficulty: "Intermediate",
    stem: "Why should antidepressants not be used in acute mania?",
    options: ["They are too sedating and worsen cognitive function", "They can trigger a mood switch into mania or cause rapid cycling", "They interact with all mood stabilizers", "They are not effective in bipolar disorder at all"],
    correct: 1,
    explanation: "Antidepressants can precipitate antidepressant-induced mania (AIM) in bipolar disorder — triggering a manic or hypomanic episode, or causing rapid cycling. TCAs carry the highest risk. If antidepressants are used in bipolar depression, they must be combined with a mood stabilizer.",
    ref: "Canadian Pharmacy Practice Guidelines"
  },
  {
    id: 20, topic: "Psychiatry", difficulty: "Advanced",
    stem: "A patient on haloperidol and lithium needs a diuretic for hypertension. Which diuretic should be avoided?",
    options: ["Furosemide", "Hydrochlorothiazide (HCTZ)", "Indapamide", "Spironolactone"],
    correct: 1,
    explanation: "Thiazide diuretics (HCTZ) reduce renal sodium excretion, causing sodium depletion which leads to compensatory lithium retention → lithium toxicity. Additionally, HCTZ combined with haloperidol poses QT prolongation risk. Avoid HCTZ in patients on lithium.",
    ref: "+ lithium"
  },
  {
    id: 21, topic: "Psychiatry", difficulty: "Intermediate",
    stem: "What is the minimum duration of antipsychotic therapy after a first episode of schizophrenia?",
    options: ["3–6 months after symptom remission", "1–2 years after symptom remission", "5 years", "Lifelong therapy is always required after first episode"],
    correct: 1,
    explanation: "After a first episode of schizophrenia with good recovery: minimum 1–2 years of antipsychotic therapy after symptom remission before considering discontinuation. Second episode: minimum 5 years. Multiple/chronic episodes: indefinite/lifelong. Premature stopping is the #1 cause of relapse.",
    ref: "CAMH Schizophrenia Guidelines"
  },

  // ── PHARMACOKINETICS & CALCULATIONS ──────────────────────────────────────
  {
    id: 22, topic: "Pharmacokinetics", difficulty: "Intermediate",
    stem: "A study reports: Control event rate 20%, Experimental event rate 12%. What is the NNT?",
    options: ["5", "8", "12.5", "13"],
    correct: 2,
    explanation: "ARR = CER − EER = 20% − 12% = 8% = 0.08. NNT = 1/ARR = 1/0.08 = 12.5. Always round UP (can't treat a fraction of a patient). Always use ARR (not RRR) to calculate NNT.",
    ref: "Canadian Pharmacy Practice Guidelines"
  },
  {
    id: 23, topic: "Pharmacokinetics", difficulty: "Advanced",
    stem: "A drug has a half-life of 8 hours. Ke = 0.0866/h. If the concentration at 2h is known, what formula gives you the time to reach a target concentration?",
    options: ["t = ln(C₀/C) × Ke", "t = ln(C₀/C) / Ke", "t = C₀ / (C × Ke)", "t = Ke / ln(C₀/C)"],
    correct: 1,
    explanation: "Using first-order elimination: C(t) = C₀ × e^(-Ke×t). Rearranging to find t: t = ln(C₀/C) / Ke. With t½ = 8h, Ke = 0.693/8 = 0.0866/h. Concentrations halve every 8 hours.",
    ref: "PK section"
  },
  {
    id: 24, topic: "Pharmacokinetics", difficulty: "Intermediate",
    stem: "A vaping patient uses 60 mL/week of 9 mg/mL nicotine solution with 30% absorption. What nicotine patch strength is most equivalent?",
    options: ["7 mg/day", "14 mg/day", "21 mg/day", "28 mg/day"],
    correct: 2,
    explanation: "Total nicotine: 60 × 9 = 540 mg/week. Absorbed: 540 × 0.30 = 162 mg/week. Daily absorbed: 162 ÷ 7 = ~23.1 mg/day. Closest patch strength = 21 mg/day (highest available strength).",
    ref: "Canadian Pharmacy Practice Guidelines"
  },
  {
    id: 25, topic: "Pharmacokinetics", difficulty: "Intermediate",
    stem: "A 75g preparation of 8% salicylic acid needs to be made into a 12.5% preparation by adding pure salicylic acid. How many grams to add?",
    options: ["2.5g", "3.86g", "5g", "6.25g"],
    correct: 1,
    explanation: "Drug currently present: 0.08 × 75 = 6g. Let x = grams pure SA to add. (6+x)/(75+x) = 0.125 → 6+x = 9.375+0.125x → 0.875x = 3.375 → x ≈ 3.86g.",
    ref: "Canadian Pharmacy Practice Guidelines"
  },

  // ── VACCINES & IMMUNIZATION ───────────────────────────────────────────────
  {
    id: 26, topic: "Vaccines", difficulty: "Intermediate",
    stem: "A pharmacist arrives in the morning after an overnight power outage. What is the correct first step with the vaccines?",
    options: ["Discard all vaccines immediately to be safe", "Use all vaccines before they further degrade", "Quarantine vaccines, label 'Do Not Use', document, and contact manufacturer or public health", "Place vaccines back in the fridge and continue dispensing"],
    correct: 2,
    explanation: "Do NOT discard or use immediately. Quarantine all vaccines and label 'Do Not Use / Do Not Discard – Under Assessment'. Document duration of outage. Contact manufacturer or provincial health unit — some vaccines can tolerate brief temperature excursions and may still be viable.",
    ref: "NACI Cold Chain Guidelines"
  },
  {
    id: 27, topic: "Vaccines", difficulty: "Intermediate",
    stem: "Which of the following vaccines is NOT safe to give during pregnancy?",
    options: ["Inactivated influenza (IM)", "Tdap (at 27–36 weeks)", "MMR vaccine", "COVID-19 vaccine"],
    correct: 2,
    explanation: "Live attenuated vaccines (MMR, varicella, yellow fever, LAIV, BCG) are contraindicated in pregnancy due to theoretical fetal risk. Safe vaccines in pregnancy include: inactivated flu shot (IM), Tdap (27–36 weeks), COVID-19 vaccines, hepatitis B, and RSV vaccine (Abrysvo, 32–36 weeks).",
    ref: "NACI Pregnancy Guidelines"
  },
  {
    id: 28, topic: "Vaccines", difficulty: "Intermediate",
    stem: "What is the correct route of administration for MMR vaccine?",
    options: ["Intramuscular (IM)", "Subcutaneous (SC)", "Intradermal (ID)", "Oral"],
    correct: 1,
    explanation: "MMR is administered subcutaneously (SC) into the outer upper arm or anterolateral thigh. Most live attenuated vaccines (MMR, varicella, yellow fever) are given SC. Most inactivated vaccines (flu shot, hep A/B, Tdap) are given IM.",
    ref: "NACI Immunization Guide"
  },
  {
    id: 29, topic: "Vaccines", difficulty: "Intermediate",
    stem: "When should the RSV maternal vaccine (Abrysvo) be administered during pregnancy?",
    options: ["At any time during pregnancy", "Before 20 weeks gestation", "Between 32–36 weeks gestation", "Immediately after delivery"],
    correct: 2,
    explanation: "Abrysvo (Pfizer RSV vaccine) is given between 32–36 weeks gestation to maximize antibody transfer to the fetus before birth. The alternative is nirsevimab (Beyfortus), a monoclonal antibody given directly to the neonate after birth — these are different products.",
    ref: "Health Canada"
  },
  {
    id: 30, topic: "Vaccines", difficulty: "Intermediate",
    stem: "A patient had a splenectomy. Which vaccine is most important to recommend?",
    options: ["HPV vaccine", "Pneumococcal vaccine (PNEUMOVAX 23)", "Yellow fever vaccine", "Rotavirus vaccine"],
    correct: 1,
    explanation: "Asplenic patients are at high risk for encapsulated organisms (Streptococcus pneumoniae, Haemophilus influenzae, Neisseria meningitidis). Pneumococcal vaccine (PNEUMOVAX 23 and/or PCV13/15) is critical. Meningococcal and Hib vaccines are also recommended.",
    ref: "NACI Post-Splenectomy Guidelines"
  },

  // ── RESPIRATORY / COPD / ASTHMA ───────────────────────────────────────────
  {
    id: 31, topic: "Respirology", difficulty: "Intermediate",
    stem: "A COPD patient who can walk 100 metres on level ground but must stop to rest due to breathlessness. What mMRC grade is this?",
    options: ["mMRC Grade 1", "mMRC Grade 2", "mMRC Grade 3", "mMRC Grade 4"],
    correct: 2,
    explanation: "mMRC Grade 3: Stops for breath after walking approximately 100 metres or after a few minutes on level ground. Grade 4 is too breathless to leave the house. Grade 2 stops due to breathlessness when walking uphill. Grading guides COPD management escalation.",
    ref: "GOLD COPD Guidelines 2023"
  },
  {
    id: 32, topic: "Respirology", difficulty: "Intermediate",
    stem: "A COPD patient not improving on LABA + LAMA is found to have a cat at home. What should be added?",
    options: ["Add an inhaled corticosteroid (ICS)", "Add montelukast", "Add roflumilast", "Switch to high-dose LABA only"],
    correct: 0,
    explanation: "If a COPD patient has an allergic trigger (pet dander), adding an ICS to LABA + LAMA (triple therapy) reduces exacerbations. The cat is a clue suggesting an allergic/eosinophilic component. Triple therapy (ICS + LABA + LAMA) is the next step for uncontrolled COPD.",
    ref: "GOLD COPD 2023"
  },

  // ── DERMATOLOGY ───────────────────────────────────────────────────────────
  {
    id: 33, topic: "Dermatology", difficulty: "Intermediate",
    stem: "A patient has 20 papules and has been on benzoyl peroxide for 3 months without adequate response. What is the next step in acne management?",
    options: ["Add a topical retinoid", "Start oral isotretinoin", "Start oral doxycycline only", "Switch to topical clindamycin alone"],
    correct: 0,
    explanation: "The acne stepwise approach (B-R-A-I): Benzoyl peroxide → Retinoid → Antibiotic (topical/oral) → Isotretinoin. After BPO failure, add a topical retinoid (e.g., adapalene, tretinoin). Combining BPO + retinoid addresses comedones and inflammatory lesions.",
    ref: "Canadian Acne Guidelines"
  },
  {
    id: 34, topic: "Dermatology", difficulty: "Intermediate",
    stem: "A patient treated for rosacea with metrogel then develops vesicular tinea. What antifungal should be given?",
    options: ["Nystatin", "Tolnaftate (Tinactin)", "Fluconazole oral", "Hydrocortisone 1%"],
    correct: 1,
    explanation: "Vesicular tinea (tinea pedis or corporis) is treated with a topical antifungal. Tolnaftate is appropriate for tinea. Nystatin covers Candida but not dermatophytes causing tinea. Fluconazole would be for resistant/widespread tinea. Hydrocortisone alone would worsen fungal infection.",
    ref: "+ tinea"
  },

  // ── ALLERGIC RHINITIS / HEADACHE ──────────────────────────────────────────
  {
    id: 35, topic: "Respiratory", difficulty: "Intermediate",
    stem: "A patient presents with itchy nose, rhinorrhea, and sneezing. What is the most effective first-line treatment?",
    options: ["Oral loratadine (antihistamine)", "Intranasal corticosteroid (e.g., fluticasone)", "Oral decongestant (pseudoephedrine)", "Oral cetirizine"],
    correct: 1,
    explanation: "Intranasal corticosteroids (INCS) are the most effective first-line treatment for allergic rhinitis, especially for nasal congestion. They outperform oral antihistamines overall. If the question asks for 'best' or 'most effective', answer INCS. Non-sedating antihistamines are good for sneezing and rhinorrhea but less effective for congestion.",
    ref: "ARIA Guidelines 2023"
  },
  {
    id: 36, topic: "Neurology", difficulty: "Intermediate",
    stem: "A patient with bilateral non-pulsating headache, mild photophobia, and 3 weeks of daily analgesic use — what is the primary diagnosis?",
    options: ["Migraine with aura", "Cluster headache", "Tension-type headache (with medication overuse risk)", "Subarachnoid hemorrhage"],
    correct: 2,
    explanation: "Bilateral, pressing/tightening, non-pulsating pain with mild photophobia OR phonophobia (not both) = tension-type headache (TTH). Three weeks of analgesic overuse raises concern for medication overuse headache (MOH), though MOH technically requires ≥3 months. The primary diagnosis is TTH.",
    ref: "IHS Headache Classification"
  },
  {
    id: 37, topic: "Neurology", difficulty: "Intermediate",
    stem: "A patient with migraine is underweight, has Raynaud phenomenon, and takes ramipril. What is the best migraine prophylaxis?",
    options: ["Propranolol", "Topiramate", "Candesartan", "Carbamazepine"],
    correct: 2,
    explanation: "Propranolol is contraindicated in Raynaud phenomenon (can worsen peripheral vasospasm). Topiramate causes weight loss (already underweight). Carbamazepine is not a first-line migraine prophylactic. Candesartan (ARB) is a safe, evidence-based migraine prophylaxis option and avoids all these contraindications.",
    ref: "Canadian Headache Society"
  },

  // ── CONTRACEPTION & WOMEN'S HEALTH ───────────────────────────────────────
  {
    id: 38, topic: "Women's health", difficulty: "Intermediate",
    stem: "A patient on DMPA for 98 days has unprotected sex 6 days ago and wants emergency contraception. What is the most appropriate option?",
    options: ["Levonorgestrel (Plan B)", "Ulipristal acetate (ella)", "Copper IUD", "No emergency contraception is needed"],
    correct: 2,
    explanation: "Levonorgestrel is effective up to 72h (max 120h) — sex was 6 days ago: too late. Ulipristal is effective up to 120h (5 days) — 6 days ago: also too late. Copper IUD is effective up to 7 days post-unprotected sex and is the only valid option. At 98 days, DMPA is borderline late (CDC allows up to 15 weeks).",
    ref: "Canadian Pharmacy Practice Guidelines"
  },
  {
    id: 39, topic: "Women's health", difficulty: "Intermediate",
    stem: "A woman whose sister has VTE wants to start COC. What genetic factor is most important to consider?",
    options: ["BRCA1/BRCA2 mutation", "Factor V Leiden mutation", "HLA-B*57:01", "G6PD deficiency"],
    correct: 1,
    explanation: "Factor V Leiden is the most common inherited thrombophilia and significantly increases VTE risk with combined oral contraceptives (COC). A family history of VTE is a red flag. Screening for Factor V Leiden (and other thrombophilias) should be considered before starting COC.",
    ref: "SOGC Contraception Guidelines"
  },
  {
    id: 40, topic: "Women's health", difficulty: "Intermediate",
    stem: "Primary dysmenorrhea — what is the most evidence-based first-line pharmacological treatment?",
    options: ["Acetaminophen started as needed", "Combined oral contraceptive pill", "NSAIDs started 1–2 days before expected menses onset", "Tramadol"],
    correct: 2,
    explanation: "NSAIDs (ibuprofen, naproxen) are first-line for dysmenorrhea. They inhibit prostaglandin synthesis → reduce uterine contractions. Key: start 1–2 days BEFORE expected menses onset and continue for 2–3 days. Starting after pain begins is less effective.",
    ref: "SOGC Dysmenorrhea Guidelines"
  },

  // ── PHARMACOLOGY MISC ─────────────────────────────────────────────────────
  {
    id: 41, topic: "Pharmacology", difficulty: "Intermediate",
    stem: "A patient with alcohol use disorder also uses fentanyl recreationally. Which drug is most appropriate for alcohol cessation?",
    options: ["Naltrexone", "Buprenorphine/naloxone (Suboxone)", "Acamprosate", "Disulfiram"],
    correct: 2,
    explanation: "Naltrexone is contraindicated in active opioid users — it will precipitate acute withdrawal. Buprenorphine/naloxone is for OUD, not AUD. Acamprosate is safe — no opioid interaction (modulates GABA/glutamate). Disulfiram requires motivation and abstinence.",
    ref: "CAMH AUD Guidelines"
  },
  {
    id: 42, topic: "Pharmacology", difficulty: "Intermediate",
    stem: "Why is folic acid given alongside methotrexate?",
    options: ["It enhances the anti-inflammatory effect of methotrexate", "It reduces GI toxicity, stomatitis, and hepatotoxicity — without reducing efficacy", "It prevents drug interactions with NSAIDs", "It corrects the megaloblastic anemia caused by methotrexate"],
    correct: 1,
    explanation: "Methotrexate inhibits dihydrofolate reductase (folate antagonist). Folic acid supplementation reduces MTX-related toxicity: stomatitis, GI upset, hepatotoxicity, bone marrow suppression. Critically — it does NOT reduce anti-inflammatory efficacy. Dose: 1–5mg daily or 5mg once weekly.",
    ref: "Canadian Pharmacy Practice Guidelines"
  },
  {
    id: 43, topic: "Pharmacology", difficulty: "Intermediate",
    stem: "A patient taking long-term lithium is also prescribed an NSAID for pain. What is the concern?",
    options: ["NSAIDs reduce lithium absorption in the gut", "NSAIDs decrease renal lithium clearance → lithium toxicity", "NSAIDs cause lithium-induced nephropathy directly", "No significant interaction"],
    correct: 1,
    explanation: "NSAIDs inhibit prostaglandin synthesis → reduce renal blood flow → decrease lithium clearance → lithium accumulation and toxicity. The same applies to ACE inhibitors and thiazide diuretics. Monitor lithium levels closely if NSAIDs are unavoidable. Therapeutic range: 0.6–1.2 mmol/L.",
    ref: "Lithium Product Monograph"
  },
  {
    id: 44, topic: "Pharmacology", difficulty: "Intermediate",
    stem: "A patient is taking rivaroxaban 20mg daily. What is the most important counselling point?",
    options: ["Take on an empty stomach for best absorption", "Do not crush or chew — swallow whole", "Take with a full meal (at least 500 calories)", "Can be taken at any time regardless of food"],
    correct: 2,
    explanation: "Rivaroxaban 20mg must be taken with food to ensure adequate absorption (bioavailability increases significantly with food). Dabigatran capsules should not be crushed. Apixaban can be taken with or without food. This is a commonly tested counselling point on the PEBC.",
    ref: "Xarelto Product Monograph"
  },
  {
    id: 45, topic: "Pharmacology", difficulty: "Intermediate",
    stem: "Which QT-prolonging drug is commonly prescribed but carries real cardiac risk — especially with hypokalemia?",
    options: ["Amoxicillin", "Azithromycin", "Cetirizine", "Pantoprazole"],
    correct: 1,
    explanation: "Azithromycin (Z-pack) is widely prescribed but is a documented QT-prolonging agent. Risk is amplified with hypokalemia, hypomagnesemia, or other QT-prolonging drugs. Other key QT drugs: fluoroquinolones, antipsychotics, domperidone, methadone, fluconazole, TCAs.",
    ref: "Canadian Pharmacy Practice Guidelines"
  },

  // ── ETHICS & PRACTICE ─────────────────────────────────────────────────────
  {
    id: 46, topic: "Pharmacy practice", difficulty: "Intermediate",
    stem: "A daughter asks you not to disclose side effects of her mother's medication, saying it will discourage her. What should you do, and which ethical principle is violated if you comply?",
    options: ["Follow the daughter's request — caregiver knows best", "Disclose information directly to the patient; violating this breaches patient autonomy", "Document the request and defer to the physician", "Provide a simplified version of side effects to avoid concern"],
    correct: 1,
    explanation: "Patients have the right to informed consent (autonomy). A caregiver's request to withhold information from a competent patient violates this right. Disclosing directly to the patient is mandatory. Complying with the daughter's request would violate autonomy AND non-maleficence (withholding information may harm the patient).",
    ref: "NAPRA Code of Ethics"
  },
  {
    id: 47, topic: "Pharmacy practice", difficulty: "Intermediate",
    stem: "A physician prescribes a controlled substance but their licence is de-registered in this province. What should you do?",
    options: ["Dispense with a note in the file", "Contact the physician for clarification before dispensing", "Do not dispense the prescription", "Dispense and report to the College afterward"],
    correct: 2,
    explanation: "A prescriber must be licensed and in good standing in the province where they are prescribing. If a physician is de-registered in that province, their prescriptions are not valid. Do not dispense. Contact your pharmacy manager and the College if uncertain.",
    ref: "NAPRA Guidelines"
  },
  {
    id: 48, topic: "Pharmacy practice", difficulty: "Intermediate",
    stem: "A laboratory test returns with 95% Negative Predictive Value (NPV). How do you interpret this?",
    options: ["95% of patients with a positive test actually have the disease", "95% of patients with a negative test do NOT have the disease; if clinical suspicion persists, further investigation is warranted", "The test is 95% accurate overall", "Repeat the test — the NPV is too low to trust"],
    correct: 1,
    explanation: "NPV = probability that a person does NOT have the disease when the test is negative. 95% NPV means: if the test is negative, there is a 95% chance the patient truly does not have the disease. If clinical suspicion remains high despite a negative result, further investigation may still be warranted.",
    ref: "Canadian Pharmacy Practice Guidelines"
  },

  // ── RHEUMATOLOGY / MSK ────────────────────────────────────────────────────
  {
    id: 49, topic: "Rheumatology", difficulty: "Intermediate",
    stem: "A patient with gout has had two attacks in 3 years. Uric acid is 480 μmol/L. When is urate-lowering therapy (ULT) indicated?",
    options: ["Only after 3 or more attacks", "After ≥2 attacks, or with tophi, CKD, or uric acid stones", "Only when uric acid is above 600 μmol/L", "ULT is not recommended for gout"],
    correct: 1,
    explanation: "Indications for starting ULT (e.g., allopurinol): ≥2 gout attacks per year, tophi, chronic gouty arthropathy, nephrolithiasis, or CKD. This patient with 2 attacks in 3 years and elevated uric acid meets criteria. Target uric acid: <360 μmol/L (or <300 with tophi).",
    ref: "ACR Gout Guidelines 2020"
  },
  {
    id: 50, topic: "Rheumatology", difficulty: "Advanced",
    stem: "A Middle Eastern man needs allopurinol. He has not been screened for HLA-B*58:01. What should be done?",
    options: ["Start allopurinol at the lowest dose — no screening needed", "Screen for HLA-B*58:01 first; if positive, avoid allopurinol due to SJS/TEN risk", "Give febuxostat without screening", "HLA-B*57:01 is the relevant allele — screen for that instead"],
    correct: 1,
    explanation: "HLA-B*58:01 is associated with severe cutaneous reactions (SJS/TEN) with allopurinol, particularly in Asian and Middle Eastern populations. Screening before starting allopurinol is recommended in these groups. If positive → avoid allopurinol; use febuxostat or probenecid instead. (Note: HLA-B*57:01 is for abacavir in HIV — a different drug).",
    ref: "ACR Guidelines"
  }
];

// Organize by topic
const TOPICS = [...new Set(QUESTION_BANK.map(q => q.topic))];

// Get questions filtered by topic
function getQuestions(topic = 'all', count = 10) {
  let pool = topic === 'all' ? [...QUESTION_BANK] : QUESTION_BANK.filter(q => q.topic === topic);
  return pool.sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
}
