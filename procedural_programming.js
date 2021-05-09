Algorithme insertion_Sort
VAR
    arr : INTEGRE[5];
    n : INTEGRER;
BEGIN
    arr := [12, 11, 13, 5, 6];
    n := arr.length;

    insertionSort(arr, n);
END

PROCEDURE insertionSort(VAR arr : ARRAY_OF INTEGER, VAR n : INTEGER)
VAR
   i : INTEGER;
   j : INTEGER;
   key : INTEGER;
BEGIN
    arr := tab.length;
   // one by one move boundary of sub-array
   FOR i FROM 1 TO n-1 STEP 1 DO
        key := arr[i]; 
        j := i - 1; 
        WHILE (j >= 0 AND arr[j] > key)  DO
            arr[j + 1] := arr[j]; 
            j = j - 1;
        END_WHILE
        arr[j + 1] := key; 
   END_FOR
END

///*********************  JS solution  **************************/
let arr = [12, 11, 13, 5, 6 ]; 
    let n = arr.length; 
   
    insertionSort(arr, n); 
    printArray(arr, n); 

    function insertionSort(arr, n) 
    { 
        let i, key, j; 
        for (i = 1; i < n; i++)
        { 
            key = arr[i]; 
            j = i - 1; 
       
            /* Move elements of arr[0..i-1], that are 
            greater than key, to one position ahead 
            of their current position */
            while (j >= 0 && arr[j] > key)
            { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = key; 
        } 
    }