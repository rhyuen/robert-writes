---
title: 'NextJS + next/router'
slug: 'next-and-router'
date: '2021-02-20'
tags: 'NextJS,router'
---

I kept on getting an issue where NextJS would say that it couldn't iterate over the array to make a series of elements because the object didn't have the `map` method because it's `undefined`.

```javascript
export default function Poll(){
    const router = useRouter();    
    const {id} = router.query; 
    const [data, setData] = React.useState({});        

    React.useEffect(() => {                  
        const url = `/api/poll/${id}`;        
        fetch(url)
            .then(res => res.json())
            .then(res => {                               
                setData(res.data[0]);                
            }).catch(e => {                
                console.error(e);
            });            
    }, []);


    return (
        <>          
        {      
                Object.keys(data).length === 0 ? 
                <h1>loading</h1> : (
                <>                                        
                    {                        
                        data.choices.map(({count, name}, choice_index) => (                                    
                            <p key={choice_index}>
                                <input type="radio" id={name} name={data._id} value={name}/>{count} : 
                                <label htmlFor={name}>{name}</label>                                   
                            </p>
                        ))
                    }                             
                </>
                )
        }
        </>
    )
```

According to this post [here](https://stackoverflow.com/a/61043260), on first render ...

```javascript
    const router = useRouter();
    const {id} = router.query;
```

The query object is an empty object. But, within the contact of the `useEffect` hook, the value for `router.query` is populated/defined.  So, I moved the logic requiring the `router.query` value(s) within the hook and it largely resolved the issue.  I also added the 

```javascript
 Object.keys(data).length === 0 
```

as a check for data being loaded.  I also tried `useState(boolean)` but the key check seemed to work better.

### Sources

[NextJS Client Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)
[NextJS API Dynamic Routes](https://nextjs.org/docs/api-routes/dynamic-api-routes)
[StackOverflow Reference](https://stackoverflow.com/a/61043260)