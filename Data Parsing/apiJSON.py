'''
id$#$title$#$summary$#$rating$#$name$#$label$#$author$#$description$#$ty
pe$#$downloads$#$useCount$#$sampleUrl$#$downloadUrl$#$dateModified$#
$remoteFeed$#$numComments$#$commentsUrl$#$tag1###tag2###tag3$#$cate
gory$#$protocols$#$serviceEndpoint$#$version$#$wsdl$#$dataFormats$#$apig
roups$#$example$#$clientInstall$#$authentication$#$ssl$#$readonly$#$Vendor
ApiKits$#$CommunityApiKits$#$blog$#$forum$#$support$#$accountReq$#$c
ommercial$#$provider$#$managedBy$#$nonCommercial$#$dataLicensing$#$f
ees$#$limits$#$terms$#$company$#$updated
'''


import csv
import json

def main():


    encoding = "utf8"
    completeJSON=[]
    index_val=0;
    output = []
    with open('api.txt') as file:
        for valueInfile in file:
            # print(valueInfile)
            line=valueInfile.split('$#$')
            print(line)
            tagarray = []
            tags=line[17].split('###')

            for tag in tags:
                tagarray.append(tag)

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
                'downloadUrl':line[12],
                'dateModified':line[13],
                'remoteFeed':line[14],
                'numComments':line[15],
                'commentsUrl':line[16],
                'tag':tagarray,
                'category':line[18],
                'protocols':line[19],
                'serviceEndpoint':line[20],
                'version':line[21],
                'wsdl':line[22],
                'dataFormats':line[23],
                'apigroups':line[24],
                'example':line[25],
                'clientInstall':line[26],
                'authentication':line[27],
                'ssl':line[28],
                'readonly':line[29],
                'VendorApiKits':line[30],
                'CommunityApiKits':line[31],
                'blog':line[32],
                'forum':line[33],
                'support':line[34],
                'accountReq':line[35],
                'commercial':line[36],
                'provider':line[37],
                'managedBy':line[38],
                'nonCommercial':line[39],
                'dataLicensing':line[40],
                'fees':line[41],
                'limits':line[42],
                'terms':line[43],
                'company':line[44],
                'updated':line[45],

                })

    print('output--->',output)
    with open('APIJsonFiles.json', 'w') as outfile:
        json.dump(output, outfile, sort_keys=True, indent=4)


main()