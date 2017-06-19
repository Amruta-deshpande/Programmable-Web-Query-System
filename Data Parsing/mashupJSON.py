#id$#$title$#$summary$#$rating$#$name$#$label$#$author$#$description$#$type$#$downloads$#$useCount$#$sampleUrl$#$dateModified$#$numComments$#$commentsUrl$#$tag1###tag2###tag3$#$api1$$$url1###api2$$$url2###api3$$$url3...$#$update

import csv
import json

def main():


    encoding = "utf8"

    output = []
    with open('mashup.txt') as file:
        for valueInfile in file:
            # print(valueInfile)
            line=valueInfile.split('$#$')
            # print(line)
            tagarray = []
            tags=line[15].split('###')

            for tag in tags:
                tagarray.append(tag)

            apiurl=line[16].split('###')


            apiarray=[]
            urlarray=[]
            for val in apiurl:
                # print (val)
                content=val.split('$$$')
                for index,cont in enumerate(content):
                    print(cont)
                    if index==0:
                        api=cont
                    else:
                        url=cont

                apiarray.append(api)
                urlarray.append(url)




            output.append({
                'id':line[0],
                'title':line[1],
                'summary':line[2],
                'rating':line[3],
                'name':line[4],
                'label':line[5],
                'author':line[6],
                'description':line[7],
                'type':line[8],
                'downloads':line[9],
                'useCount':line[10],
                'sampleUrl':line[11],
                'dateModified':line[12],
                'numComments':line[13],
                'commentsUrl':line[14],
                'tag':tagarray,
                'api':apiarray,
                'url':urlarray,
                'updated':line[17],

                })

    print('output--->',output)
    with open('MashupJsonFiles.json', 'w') as outfile:
        json.dump(output, outfile, sort_keys=True, indent=4)


main()