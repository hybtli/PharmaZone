export interface GetDutyPharmacyDetail {
    EczaneAdi?: string;
    Adresi?: string;
    Semt?: string;
    YolTarifi?: string;
    Telefon?: string;
    Telefon2?: string;
    Sehir?: string;
    ilce?: string;
    latitude?: number;
    longitude?: number;
}

export interface GetProvinces{
    SehirAd: string,
    SehirSlug: string
}

export interface GetDistricts{
    ilceAd: string,
    ilceSlug: string
}