export interface GetMedicineContent {
    medicine: {
        name: string;
        dosage_form: string;
        strength: string;
        manufacturer: string;
        ingredients: string[];
        indications: string;
        warnings: string[];
        storage: string;
    }
}