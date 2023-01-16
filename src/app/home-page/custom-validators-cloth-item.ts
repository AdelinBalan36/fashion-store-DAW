import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidators{

    public static brandName(control:FormControl){
         
       const regularExpression=new RegExp("^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$");
       return regularExpression.test(control.value)?null:{"error-404" : true};

    }
    public static size(control:FormControl){
         
      const regularExpression=new RegExp("/^[0-9]*$/");
      return regularExpression.test(control.value)?null:{"error-404" : true};

   }

    //return condition
}