class SmallestIntegerFinder {
    findSmallestInt(args)
    {
      let dig = Number.MAX_SAFE_INTEGER
      for(let i = 0; i < args.length; i++)
        {
          if(args[i] < dig)
            {
              dig = args[i]
            }
        }
      return dig
    }
  }