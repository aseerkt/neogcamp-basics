import CashRegister from '../pages/CashRegister/CashRegister';
import Home from '../pages/Home/Home';
import LuckyBirthday from '../pages/LuckyBirthday/LuckyBirthday';
import PalindromeBirthday from '../pages/PalindromeBirthday/PalindromeBirthday';
import ProfitOrLoss from '../pages/ProfitOrLoss/ProfitOrLoss';
import Triangles from '../pages/Triangles/Triangles';

export const ROUTES_DATA = [
  { path: '/', component: Home },
  { path: '/cash-register', component: CashRegister, name: 'Cash Register' },
  { path: '/lucky-birth', component: LuckyBirthday, name: 'Lucky Birthday' },
  {
    path: '/palindrome-birth',
    component: PalindromeBirthday,
    name: 'Palindrome Birthday',
  },
  { path: '/triangles', component: Triangles, name: 'Learn Triangles' },
  { path: '/profit-loss', component: ProfitOrLoss, name: 'Profile or Loss' },
];
