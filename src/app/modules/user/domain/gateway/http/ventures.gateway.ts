export interface VenturesHttpClient {
  getVenturesCountByUserEmail(email: string): Promise<number>;
  getPublicationsCountByUserEmail(email: string): Promise<number>;
  getEventsCountByUserEmail(email: string): Promise<number>;
  getSubscriptionsCountByUserEmail(email: string): Promise<number>;
  getGeneralSubscribersCountByUserEmail(email: string): Promise<number>;
  getDonationsGivenCountByUserEmail(email: string): Promise<number>;
  getDonationsReceivedCountByUserEmail(email: string): Promise<number>;
  getSponsorshipsGivenCountByUserEmail(email: string): Promise<number>;
  getSponsorshipsReceivedCountByUserEmail(email: string): Promise<number>;
  getCommentsCountByUserEmail(email: string): Promise<number>;
  getClapsCountByUserEmail(email: string): Promise<number>;
}

export const VenturesHttpClient = Symbol('VenturesHttpClient');
