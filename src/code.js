const signalCriteriaMapping = [
    {
        "signalCriteriaMappingAtSubFactor": [
            {
                "subFactor": "Market Conditions ",
                "subFactorWeight": 20,
                "signalName": "CompanyOverview",
                "optionMapping": [
                    {
                        "name": "A market leading provider of commercial activities, services or products with competitive advantage and strong demand",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "A market leading provider of commercial activities, services or products with competitive advantage and strong demand",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "A provider of commercial activities, services or products with no real competitive advantage and acceptable demand",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "A provider of commercial activities, services or products without a competitive advantage and limited demand",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            },
            {
                "subFactor": "Financial Ratios - Debt Service Cover",
                "subFactorWeight": 30,
                "signalName": "EBITDAvsDSCForAF",
                "optionMapping": [
                    {
                        "name": "EBITDA at least 3x customer DSC (including new facility)",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "EBITDA at least 2x customer DSC (including new facility)",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "EBITDA at least 1.2x customer DSC (including new facility)",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "EBITDA less than 1.2x DSC (including new facility)",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            },
            {
                "subFactor": "Income Stress - Financial Stability",
                "subFactorWeight": 10,
                "signalName": "StressPerformance",
                "optionMapping": [
                    {
                        "name": "The business has demonstrated 5 or more years of stable revenues with capital resources and liquidity to meet financial obligations during a period of severe financial stress and/or sector downturn",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "The business has demonstrated 3-5 years of stable revenues and with adequate capital resources and liquidity to meet financial obligations during a period of severe financial stress and/or sector downturn. Default is only likely under severe economic conditions",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "The business has demonstrated a minimum of 2 years of stable revenues with limited capital resources and liquidity to meet financial obligations during a period of severe financial stress and/or sector downturn. Default is likely under a normal downturn",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "The business has uncertain revenues with minimal capital resources and liquidity and is likely to default unless conditions improve in the near term",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            },
            {
                "subFactor": "Income Stress - Gearing Ratio",
                "subFactorWeight": 10,
                "signalName": "GearingRatioForAF",
                "optionMapping": [
                    {
                        "name": "Total debt is less than Shareholders' Fund",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "Total debt is less than 2 times Shareholders' Funds",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "Total debt is less than 3.5 times Shareholders' Funds",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "Total debt is more than 3.5 times Shareholders' Funds",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            },
            {
                "subFactor": "Income Stress - EBITDA Ratio",
                "subFactorWeight": 10,
                "signalName": "EBITDARatio",
                "optionMapping": [
                    {
                        "name": "Total Debt : EBITDA ratio is under 2 times",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "Total Debt : EBITDA ratio is between 2 and 3.5 times",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "Total Debt : EBITDA ratio is between 3.5 and 4.5 times",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "Total Debt : EBITDA ratio is higher than 4.5 times",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            },
            {
                "subFactor": "Business Liquidity",
                "subFactorWeight": 20,
                "signalName": "BusinessLiquidityDSC",
                "optionMapping": [
                    {
                        "name": "Business has good liquidity. Cash (and equivalents) net of short drawn overdrafts least two years' total debt service costs",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "Business has good liquidity. Cash (and equivalents) net of drawn overdrafts equates to at least one year's total debt service costs",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "Liquidity needs covered by short term debt facilities but small cash holding (or equivalents)",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "Minimal cash holdings and little headroom within committed facilities",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            }
        ],
        "factor": "Financial Strength",
        "factorWeight": 30
    },
    {
        "signalCriteriaMappingAtSubFactor": [
            {
                "subFactor": "Political and Regulatory Risk",
                "subFactorWeight": 100,
                "signalName": "RegulationExposure",
                "optionMapping": [
                    {
                        "name": "Very low exposure of the business to regulatory changes including climate change transition risks. Strong mitigation instruments, if needed",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "Low exposure of the business to regulatory changes including climate change transition risks. Satisfactory mitigation instruments, if needed",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "Moderate exposure of the business to regulatory changes including climate change transition risks. Fair mitigation instruments",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "High exposure of the business to regulatory changes including climate change transition risks. No or weak mitigation instruments",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            }
        ],
        "factor": "Political and Legal Environment",
        "factorWeight": 10
    },
    {
        "signalCriteriaMappingAtSubFactor": [
            {
                "subFactor": "Financing Term Compared to Asset Life ",
                "subFactorWeight": 50,
                "signalName": "FinancingProfile",
                "optionMapping": [
                    {
                        "name": "Profile is fully amortising or balloon is minimal and substantially less than anticipated collateral value",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "Profile is fully amortising or balloon is less than anticipated collateral value",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "Profile is fully amortising potentially with moratorium and/or with satisfactory balloon which is in line with collateral value",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "Profile is fully amortising potentially with moratorium and/or with significant balloon which is below collateral value",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            },
            {
                "subFactor": "Design & Configuration",
                "subFactorWeight": 20,
                "signalName": "AssetDesignProfile",
                "optionMapping": [
                    {
                        "name": "Asset(s) being funded have strong advantage in design & maintenance e.g. Global OEM with a standard configuration which supports transition to climate sustainability",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "Asset(s) being funded have good advantage in design & maintenance with a standard configuration which should support transition to climate sustainability",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "Asset(s) being funded have some advantage in design & maintenance with a standard configuration which could transition to climate sustainability",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "Asset(s) being funded have no advantage in design & maintenance and near to the end of economic life or with a specialised or unsustainable configuration, limiting it's marketability",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            },
            {
                "subFactor": "Collateral Values",
                "subFactorWeight": 30,
                "signalName": "AssetValue",
                "optionMapping": [
                    {
                        "name": "Asset(s) being funded have strong advantage in design & maintenance e.g. Global OEM with a standard configuration which supports transition to climate sustainability",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "Asset(s) being funded have good advantage in design & maintenance with a standard configuration which should support transition to climate sustainability",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "Asset(s) being funded have some advantage in design & maintenance with a standard configuration which could transition to climate sustainability",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "Asset(s) being funded have no advantage in design & maintenance and near to the end of economic life or with a specialised or unsustainable configuration, limiting it's marketability",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            }
        ],
        "factor": "Transaction/Asset Characteristics",
        "factorWeight": 30
    },
    {
        "signalCriteriaMappingAtSubFactor": [
            {
                "subFactor": "Financial Capacity",
                "subFactorWeight": 40,
                "signalName": "OwnerInvestment",
                "optionMapping": [
                    {
                        "name": "The Business Owner(s) has substantial investment in the business through equity and/or loans",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "The Business Owner(s) has material investment in the business through equity and/or loans",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "The Business Owner(s) has modest investment in the business through equity",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "The Business Owner(s) has negligible investment in the business",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            },
            {
                "subFactor": "Reputation and Track record",
                "subFactorWeight": 60,
                "signalName": "ManagementExperience",
                "optionMapping": [
                    {
                        "name": "Experienced management with a strong reputation and excellent lengthy track record within the relevant business sector",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "Experienced management with a good reputation and successful track record within the relevant business sector",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "Management with a moderate track record within the relevant business sector with no serious concerns",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "Management with limited or no previous track record in operating a business within the relevant sector",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            }
        ],
        "factor": "Strength of Business Owner(s)",
        "factorWeight": 20
    },
    {
        "signalCriteriaMappingAtSubFactor": [
            {
                "subFactor": "Quality of Asset Protection & Insurance Coverage",
                "subFactorWeight": 50,
                "signalName": "InsuranceCoverage",
                "optionMapping": [
                    {
                        "name": "Interest noted on industry recognised asset register e.g. HPi. Strong insurance coverage",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "Interest noted on industry recognised asset register e.g. HPi. Good insurance coverage",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "Interest noted on industry recognised asset register e.g. HPi. Adequate insurance coverage",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "Unable to record asset on a recognised asset register. Weak insurance coverage",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            },
            {
                "subFactor": "Nature of Lien",
                "subFactorWeight": 50,
                "signalName": "LienProfile",
                "optionMapping": [
                    {
                        "name": "Perfected documentation providing legal title to asset with ability to enforce upon default",
                        "optionMapping": {
                            "min": 3,
                            "max": 4
                        }
                    },
                    {
                        "name": "null",
                        "optionMapping": {
                            "min": 2,
                            "max": 3
                        }
                    },
                    {
                        "name": "null",
                        "optionMapping": {
                            "min": 1,
                            "max": 2
                        }
                    },
                    {
                        "name": "Ability of lender to foreclose is constrained",
                        "optionMapping": {
                            "min": 0,
                            "max": 1
                        }
                    }
                ]
            }
        ],
        "factor": "Security Package",
        "factorWeight": 10
    }
];
const signalValueMapping = [
    {
        "name": "CompanyOverview",
        "numericValue": 4,
        "signalValue": "good",
        "score": 3,
        "weightedValue": 0.18
    },
    {
        "name": "EBITDAvsDSCForAF",
        "numericValue": 3,
        "signalValue": "good",
        "score": 3,
        "weightedValue": 0.27
    },
    {
        "name": "StressPerformance",
        "numericValue": 2,
        "signalValue": "satisfactory",
        "score": 2,
        "weightedValue": 0.06
    },
    {
        "name": "GearingRatioForAF",
        "numericValue": 3,
        "signalValue": "good",
        "score": 3,
        "weightedValue": 0.09
    },
    {
        "name": "EBITDARatio",
        "numericValue": 2,
        "signalValue": "satisfactory",
        "score": 2,
        "weightedValue": 0.06
    },
    {
        "name": "BusinessLiquidityDSC",
        "numericValue": 4,
        "signalValue": "strong",
        "score": 4,
        "weightedValue": 0.24
    },
    {
        "name": "RegulationExposure",
        "numericValue": 1,
        "signalValue": "weak",
        "score": 1,
        "weightedValue": 0.1
    },
    {
        "name": "FinancingProfile",
        "numericValue": 2,
        "signalValue": "satisfactory",
        "score": 2,
        "weightedValue": 0.3
    },
    {
        "name": "AssetDesignProfile",
        "numericValue": 3,
        "signalValue": "good",
        "score": 3,
        "weightedValue": 0.18
    },
    {
        "name": "AssetValue",
        "numericValue": 4,
        "signalValue": "strong",
        "score": 4,
        "weightedValue": 0.36
    },
    {
        "name": "OwnerInvestment",
        "numericValue": 2,
        "signalValue": "satisfactory",
        "score": 2,
        "weightedValue": 0.16000000000000003
    },
    {
        "name": "ManagementExperience",
        "numericValue": 2,
        "signalValue": "satisfactory",
        "score": 2,
        "weightedValue": 0.24
    },
    {
        "name": "InsuranceCoverage",
        "numericValue": 4,
        "signalValue": "strong",
        "score": 4,
        "weightedValue": 0.2
    },
    {
        "name": "LienProfile",
        "numericValue": 1,
        "signalValue": "weak",
        "score": 1,
        "weightedValue": 0.05
    }
];
const signalOptionMapping = signalCriteriaMapping.flatMap((item) =>
item.signalCriteriaMappingAtSubFactor.map((subItem) => ({
signalName: subItem.signalName,
optionMapping: subItem.optionMapping,
}))
);

const output = signalValueMapping.map((criteria) => {
const matchingSignal = signalOptionMapping.find((signal) => signal.signalName === criteria.name);

if (matchingSignal) {
const matchingOption = matchingSignal.optionMapping.find((option) => {
  return (
    criteria.numericValue = option.optionMapping.max
  );
});

if (matchingOption) {
  criteria.text = matchingOption.name;
}
}

return criteria;
});


console.log(output);