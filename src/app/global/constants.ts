export class Constants {
  public static menuVisible = false;
  public static signUpLogin = true;
  public static isAccountSigned = true;
  public static animalchoosed = '';
  public static userDataStore: any[] = [
    {
      fullName: 'Himanshu parihar',
      email: 'himanshu@gmail.com',
      phoneNumber: 998834223,
      password: 'himanshu',
      confirmPassword: 'himanshu',
    },

    {
      fullName: 'baburao apte',
      email: 'baburaoapte@gmail.com',
      phoneNumber: 998834223,
      password: 'baburao',
      confirmPassword: 'baburao',
    },
  ];

  public static currentSelectedAnimalId: number;
  public static petInfoGlobal: any[] = [];
}
