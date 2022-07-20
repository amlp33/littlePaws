export class Constants {
  public static menuVisible = false;
  public static signUpLogin = true;
  public static isAccountSigned = true;
  public static animalchoosed = 'cat';
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
    {
      fullName: 'Arvind Choudhary',
      email: 'arvindchoudhary@gmail.com',
      phoneNumber: 9977664543,
      password: 'baburao33',
      confirmPassword: 'baburao33',
    },
  ];

  public static currentSelectedAnimalId: number = 12;
  public static petInfoGlobal: any[] = [];
}
