interface IUserId {
    oid: string;
}

export interface IUserJSON {
    _id: IUserId;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phonenumber: string;
    compliancePerc: number;
    dateofbirth: string;
        // match: [/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/,'Please enter a valid date of birth']
    timezone: string;
        // default: 'America/New_York'
    futureReminderTime: number;
        // default: 0
    compliance: number;
        // default: 0
    weektoweek: number;
    mostMissed: number; // which dose (wellId) has the patient missed the most
    streak: number; // how many doses has the patient taken in a row
    doctor: string; // name of patient's docot // match: [/^[a-zA-Z\s]*$/, 'Please enter a valid name with no symbols']
    insurance: string; // name of insurance program for patient
    program: string; // disease management program
    lastCall: Date; // last time an automated phone call was received
    lastText: Date; // last time an automated text was received
    lastEmail: Date; // last email the patient received
    lastOutreach: Date; // last outreach from a care coordinator
    isText: boolean; // should patient receive text notifications
    isEmail: boolean; // should patient receive email notifications
    isCall: boolean; // should patient receive call notifications
    isAlarmsEnabled: boolean; // should patient receive on box reminders
    acuity: number; // 0 - 1 float of risk of readmission for the patient
    riskscore: number;
    deviceId: string;
    streetAddress: string;
    city: string;
    state: string; // enum
    zip: string;
    active: boolean;
    activeDate: Date; // date the patient began the service
    lastFillDate: Date; // last date a tray was filled by the pharmacist
    inactiveDate: Date; // date patient concluded TowerView service
}

export class User {
    public data: object;
    public active: boolean = true;
    public activeDate: Date = new Date('2015-10-01 00:00:00');
    public isText: boolean = false;
    public isEmail: boolean = false;
    public isCall: boolean = false;
    public isAlarmsEnabled: boolean = true;
    public futureReminderTime: number = 0;
    public compliance: number = 0;

    constructor(data: IUserJSON) {
        Object.assign(this, data);
    }
}
