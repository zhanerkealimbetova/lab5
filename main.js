let column_1 = [6,1,1,10,4,3,7,5,3,7,5,10,4,7,7,3,4,2,3,5,5,5,6,6,6,8,5,2,3,4];
let column_2 = [5,5,6,8,6,6,5,3,6,5,1,1,2,10,2,10,4,5,8,6,5,8,9,5,5,1,5,8,6,5];
let column_3 = [47,65,51,59,61,74,99,56,73,64,94,62,71,71,95,58,58,84,66,53,65,52,61,46,55,47,79,83,60,77];
let column_4 = [41,88,82,60,70,48,82,66,85,56,69,56,58,70,98,70,50,99,45,55,72,87,41,41,97,54,71,83,98,50]


let sum_1 = column_1[0] + column_1[1]+ column_1[2] + column_1[3] + column_1[4]+ column_1[5]+ column_1[6]+ column_1[7]+ column_1[8]+ column_1[9]+ column_1[10]
+ column_1[11]+ column_1[12]+ column_1[13]+ column_1[14]+ column_1[15]+ column_1[16]+ column_1[17]+ column_1[18]+ column_1[19]+ column_1[20]
+column_1[21]+ column_1[22]+ column_1[23]+ column_1[24]+ column_1[25]+ column_1[26]+ column_1[27]+ column_1[28]+ column_1[29];
let sum_2 = column_2[0] + column_2[1]+ column_2[2] + column_2[3] + column_2[4]+ column_2[5]+ column_2[6]+ column_2[7]+ column_2[8]+ column_2[9]+ column_2[10]
+ column_2[11]+ column_2[12]+ column_2[13]+ column_2[14]+ column_2[15]+ column_2[16]+ column_2[17]+ column_2[18]+ column_2[19]+ column_2[20]
+column_2[21]+ column_2[22]+ column_2[23]+ column_2[24]+ column_2[25]+ column_2[26]+ column_2[27]+ column_2[28]+ column_2[29];
let sum_3 = column_3[0] + column_3[1]+ column_3[2] + column_3[3] + column_3[4]+ column_3[5]+ column_3[6]+ column_3[7]+ column_3[8]+ column_3[9]+ column_3[10]
+ column_3[11]+ column_3[12]+ column_3[13]+ column_3[14]+ column_3[15]+ column_3[16]+ column_3[17]+ column_3[18]+ column_3[19]+ column_3[20]
+column_3[21]+ column_3[22]+ column_3[23]+ column_3[24]+ column_3[25]+ column_3[26]+ column_3[27]+ column_3[28]+ column_3[29];
let sum_4 = column_4[0] + column_4[1]+ column_4[2] + column_4[3] + column_4[4]+ column_4[5]+ column_4[6]+ column_4[7]+ column_4[8]+ column_4[9]+ column_4[10]
+ column_4[11]+ column_4[12]+ column_4[13]+ column_4[14]+ column_4[15]+ column_4[16]+ column_4[17]+ column_4[18]+ column_4[19]+ column_4[20]
+column_4[21]+ column_4[22]+ column_4[23]+ column_4[24]+ column_4[25]+ column_4[26]+ column_4[27]+ column_4[28]+ column_4[29];

let sums = [sum_1, sum_2, sum_3, sum_4];
let total_score = sum_1 + sum_2 + sum_3 + sum_4;
const results = {
	col1: column_1,  	
	col2: column_2,   	
	col3: column_3,	
	col4: column_4,	
	sums: sums,	// array of sums of each column
	total_score: total_score	// computed total score
}

console.log(results);






