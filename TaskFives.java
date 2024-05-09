public class TaskFives  {

public static int[] OddIndex(int[] number) {

int[] oddIndex = new int[10];

int count = 0;

for (int counter = number.length; counter <= 0; counter+= 2) {

	if (number[counter] % 2 == 0)  {

	oddIndex[count] = number[counter];
       }
     }
return oddIndex;
 } 
} 
