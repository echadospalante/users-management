export interface OnboardingInfo {
  gender: 'M' | 'F' | 'O';
  birthDate: Date;
  municipalityId: number;
  preferences: string[];
}
