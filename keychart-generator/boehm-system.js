
function s(bit) {
   // 2 to the power of bit
   return 1 << bit
}

const k = {
   rg       : s(0),  // <R>
   th       : s(1),  // (T)
   l_A      : s(2),  //   <A>
   l_Gs     : s(3),  //     <Gs>
   l_1      : s(4),  //   (1)
   l_2      : s(5),  //   (2)
   l_Ds     : s(6),  //    <Ds
   l_3      : s(7),  //   (3)
   l_Cs     : s(8),  //    <Cs
   l_F      : s(9),  //       <F>
   l_E      : s(10), //     <E>|
   l_Fs     : s(11), //      |<Fs>
   r_t1     : s(12), // /t1\
   r_t2     : s(13), // /t2\
   r_t3     : s(14), // /t3\
   r_t4     : s(15), // /t4\
   r_1      : s(16), //    (1)
   r_2      : s(17), //    (2)
   r_B      : s(18), //   Bn>
   r_3      : s(19), //    (3)
   r_Gs     : s(20)  //       <Gs>
                     //     {Fs}
                     //     {E}
                     //       {F}
}

let boehm = new keychart()

// [-] Magnani
// [-] Klosé

// Chalumeau

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.l_E | k.r_1 | k.r_2 | k.r_3 | k.l_F, 3, 'e')
boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.l_E | k.r_1 | k.r_2 | k.r_3, 3, 'e')

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.l_F | k.r_1 | k.r_2 | k.r_3, 3, 'f')

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.l_Fs | k.r_1 | k.r_2 | k.r_3, 3, 'f#')
boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.l_Fs | k.r_1 | k.r_2 | k.r_3 | k.l_F, 3, 'f#')

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.r_1 | k.r_2 | k.r_3, 3, 'g')

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.r_1 | k.r_2 | k.r_3 | k.r_Gs, 3, 'g')

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.r_1 | k.r_2, 3, 'a')

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.r_1, 3, 'a#')

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.r_2, 3, 'b')
boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.r_1 | k.r_B, 3, 'b')
boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.r_3, 3, 'b') // Klosé

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3, 4, 'c')

boehm.add(k.th | k.l_1 | k.l_2 | k.l_3 | k.l_Cs, 4, 'c#')

boehm.add(k.th | k.l_1 | k.l_2, 4, 'c')

boehm.add(k.th | k.l_1 | k.l_2 | k.r_t4, 4, 'd#')
boehm.add(k.th | k.l_1 | k.l_2 | k.l_Ds, 4, 'd#')
boehm.add(k.th | k.l_1 | k.r_1, 4, 'd#')
boehm.add(k.th | k.l_1 | k.r_2, 4, 'd#')

boehm.add(k.th | k.l_1, 4, 'e')

boehm.add(k.th, 4, 'f')
boehm.add(k.th | k.l_Ds, 4, 'f')
boehm.add(k.th | k.r_t4, 4, 'f')
boehm.add(k.th | k.l_1 | k.l_2 | k.l_Ds | k.r_t3, 4, 'f')

boehm.add(k.l_1, 4, 'f#')
boehm.add(k.th | k.r_t3, 4, 'f#')

boehm.add(0, 4, 'g')
boehm.add(k.l_3, 4, 'g')
boehm.add(k.l_Gs | k.th, 4, 'g')

boehm.add(k.l_Gs, 4, 'g#')
boehm.add(k.l_Gs | k.th | k.r_t3, 4, 'g#')
boehm.add(k.l_Rs | k.l_3, 4, 'g#') // Klosé

boehm.add(k.l_A, 4, 'a')
boehm.add(k.l_3| k.r_t2, 4, 'a')
boehm.add(k.l_A | k.l_3, 4, 'a') // Klosé

boehm.add(k.l_A | k.rg, 4, 'a#')
boehm.add(k.l_A | k.l_3 | k.r_t2, 4, 'a#')

// Clarion

// b4
// b4
// b4
// b4
// b4

// c5
// c5
// c5

// c#5
// c#5
// c#5

// d5

// d#5

// e5

// f5

// f#5
// f#5

// g5
// g5

// g#5

// a5
// a5

// a#5
// a#5
// a#5
// a#5
// a#5

// b5
// b5

// c6
// c6
// c6
// c6

// Altissimo

// c#6
// c#6
// c#6

// d6
// d6
// d6

// d#6
// d#6
// d#6
// d#6

// e6
// e6

// f6
// f6
// f6

// f#6
// f#6

// g6
// g6
// g6
// g6
// g6
// g6
// g6

// g#6
// g#6
// g#6

// a6

// a#6
// a#6

// b6
// b6

// c7
// c7
