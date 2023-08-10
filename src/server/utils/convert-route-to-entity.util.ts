const mapping: Record<string, string> = {
  'lab-results': 'lab_result',
  'medical-records': 'medical_record',
  organizations: 'organization',
  patients: 'patient',
  prescriptions: 'prescription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
