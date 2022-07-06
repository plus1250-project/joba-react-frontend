export const INDUSTRY_NAME = 'INDUSTRY_NAME';

export function changeIndustryName(industryName) {
  return {
    type: INDUSTRY_NAME,
    industryName,
  }
}
