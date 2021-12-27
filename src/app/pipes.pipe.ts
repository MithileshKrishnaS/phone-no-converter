import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value:any, cc:any) {
    var output='';
    output=output.concat(cc);
    output=output.concat(' ');
    if(cc==+1)
    {
      if(value.length==10)
      {
        for (var i = 0; i < 3; i ++) {
          output=output.concat(value[i])
        }
        output=output.concat('-')
        for (var i = 3; i < 6; i ++) {
          output=output.concat(value[i])
        }
        output=output.concat('-')
        for (var i = 6; i < value.length; i ++) {
          output=output.concat(value[i])
        }
        return output;
      }
      else{
        return "enter a valid number";
      }
      
    }
    if(cc==+20)
    {
      if(value.length==9)
      {
        output=output.concat(value[0])
        output=output.concat('-')
      for (var i = 1; i < value.length; i ++) {
        output=output.concat(value[i])
      }
      return output;
      }
      else{
        return "enter a valid number";
      }
    }
    if(cc==+33)
    {
      if(value.length==9)
      {
        output=output.concat('0');
        output=output.concat(value[0]);
        output=output.concat('-');
        for(var i=1;i<8;i=i+2)
        {
          output=output.concat(value[i]);
          output=output.concat(value[i+1]);
          if(i<6)
          {
            output=output.concat('-');
          }
          
        }
        return output;
      }
      else
      {
        return "enter a valid number";
      }
    }
    if(cc==+34)
    {
      if(value.length==9)
      {
        output=output.concat('0');
        output=output.concat(value[0]);
        output=output.concat('-');
        for(var i=1;i<4;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat(' ');
        for(var i=4;i<7;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat(' ');
        for(var i=7;i<9;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat(' ');
        return output;
      }
      else
      {
        return "enter a valid number";
      }
    }
    if(cc==+47)
    {
      if(value.length==8)
      {
        for(var i=0;i<3;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat('-');
        for(var i=3;i<5;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat('-');
        for(var i=5;i<8;i++)
        {
          output=output.concat(value[i]);
        }
        return output;
      }
      else
      {
        return "enter a valid number";
      }
    }
    if(cc==+52)
    {
      if(value.length==10)
      {
        for(var i=0;i<2;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat('-');
        for(var i=2;i<6;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat('-');
        for(var i=6;i<10;i++)
        {
          output=output.concat(value[i]);
        }
        return output;
      }
      else
      {
        return "enter a valid number";
      }
    }
    if(cc==+86)
    {
      if(value.length==11)
      {
        for(var i=0;i<3;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat('-');
        for(var i=3;i<7;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat('-');
        for(var i=7;i<11;i++)
        {
          output=output.concat(value[i]);
        }
        return output;
      }
      else
      {
        return "enter a valid number";
      }
    }
    if(cc==+91)
    {
      if(value.length==10)
      {
        for(var i=0;i<5;i++)
        {
          output=output.concat(value[i]);
        }
        output=output.concat('-');
        for(var i=5;i<10;i++)
        {
          output=output.concat(value[i]);
        }
        return output;
      }
      else
      {
        return "enter a valid number";
      }
    }
    
    return null;
  }

}
