
function k(bit) {
   // 2 to the power of bit
   return 1 << bit
}

const k = {
   rg       : k(0),  // <R>
   th       : k(1),  // (T)
   l_A      : k(2),  //   <A>
   l_Gs     : k(3),  //     <Gs>
   l_1      : k(4),  //   (1)
   l_2      : k(5),  //   (2)
   l_Ds     : k(6),  //    <Ds
   l_3      : k(7),  //   (3)
   l_Cs     : k(8),  //    <Cs
   l_F      : k(9),  //       <F>
   l_E      : k(10), //     <E>|
   l_Fs     : k(11), //      |<Fs>
   r_t1     : k(12), // /t1\
   r_t2     : k(13), // /t2\
   r_t3     : k(14), // /t3\
   r_t4     : k(15), // /t4\
   r_1      : k(16), //    (1)
   r_2      : k(17), //    (2)
   r_B      : k(18), //   Bn>
   r_3      : k(19), //    (3)
   r_Gs     : k(20)  //       <Gs>
}

let boehm = new keychart()

// Magnani
boehm.add(0, 4 'g')
boehm.add(k.l_3, 4, 'g')
boehm.add(k.l_Gs | k.th, 4, 'g')

boehm.add(k.l_Gs, 4, 'g#')
boehm.add(k.l_Gs | k.th | k.r_t3, 4, 'g#')

boehm.add(k.l_A, 4, 'a')
boehm.add(k.l_3| k.r_t2, 4, 'a')
