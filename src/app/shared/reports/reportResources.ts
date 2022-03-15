export class reportResources {
  static logoGST = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAABCCAIAAABIA9o6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABmQSURBVHhe7V0HWFRX2r5qTHazySbx332ySXbzZ3fdFHfNbnazSf7UTdnEEiswlem9wMzA0BmKFBso1YKiKAIKFoy9axQFFRsiiDVRUzRqLNhh/vfccxnJxALDoIh+z/vwzJw595zvfO93vvOdM/cOjPOB3MfSOem/dOlSbW3dqtXrSmaXTpk6wzNkZE08cOAQWluwYEnqmKz0jAmdCWPTx+XlFXYe+i9evAS+x4zNVqhMfKFSLNVK5Qa50qRQmT2ARKa32CJoy1W799TU7q2pretM2FVVffz4D52B/iVLV4SGxwrEKvCt0gToDDaDKbgt0BuD/Pjyc+fOo/GamrpDh746dLhTYf+BQ6dOncbo7mH6MYDM7ByeUAHWNToLOHNj0WNg6s+eMx9dbN+xK9AaHhYR18kQaAk7c+YsBnhP0n/hwsVRKRmI8Eq12YusU2j1VoPJzvXU2eXeo39GYbEvT4Yg73XiAbTJEyiOHvsGHSUkpag0gVhKOhNgt+EjxlBLQu4l+o8cOarWWRDq24N4CrnSOH5CLu2uvv7C1U4n58/XNzQ00AFC7hn6C4tKfPlyNjK7c+YtYHIg50df165dW7Bw6cpVazsZFi9Z8f3xE9SeVO4N+kPCYv1luvab9AAaF4hUO3ZWobvd1TW5U/Kn58/sZJicO53a0yUdnf59+w+KJVqswW5seR1KdUDyiLFcr/eNdGj6V6/5EvtvxGQ3qrwOnTFI5K+hnWL5/3yQYNAQcWdCn/6+Y8Zm0wE2l45Lf960Qmzt2jXgU6ALkUSzdu0GruP7SToo/ZNypwv91XeAe0CtDQwLj+M6vs+kI9JfNHOOUKx2I6mdAA/jCZT19fXoFwnmUF8p9v3tCoRirGg+frI7gwGDhcNH3jSn6XD0b926HTbSG7ENs7cr0AXod53vrt+wCcs/vOG2XWs9Au1OrjSNazpX6AjSsei/dPky1nuFJlSscOiMZGrCau0Bc4DVZLZpdFZTQAjtWuSv1eiDJcoosTIaFQwmrDvuMBLYCMwc0IjJjKZug4BAS2BgoFYfJFeZaHd3ThovcS9uJB2L/sjoBJ5/WPpw34tbf+ncxzjr2gf7yV+lNsyHJz927Fv0Oyolw19u1ehDNs/t5dzV9XpN6HBDoIVW4VsmPETnJ9Bs276TjPNqiXM346xtZ9Qwzkqm8eIe0uNNpAPRv2LlmiE88+QxnzsPM86qro07H2onOA8wiQ6pSGqZNHka+q2urvXha2xWM+EbJtvVza3+zdG9JXDuZb7IfZfnH5qQlILuGp1Of6lGpg6Va8LbFQJ/87zZeaxpbyodhf7Lly/78lVqXQiZW2Coqius1i44yOz44i88qUPRFIdVmkBf/5gfN/3aubsLYWtXN+IEbld5jH0MHEUgcwhE6oZr19Ddlbo+lzcxV7e0BlsZZzXj3NOE3T+rcCNcrnyIDvAW0lHot4fG+Iii9i//AxlnVZcTG3qkJ/umJvLHeBsZw32QiPGE6t3VNeh3cm6+ryioZMKHmPqE+91dLlc+gsk6YfSglASB27UeAKOwBxn5YsOKlWvJOBsbGr8ffe1EbsOJKS3FD1Oc52ZDn8zhQ7JGDM1IHlyQ1dd5rgDl7jWb4drx8c7LB0mPt5QOQf8XC5b4CsywFJZJzBUE5yCbSaqOVOnC2gMKVQDdCx0/fmKonxI5HZ2jWPWv7egukMVKVVFKbbjbVR5DqbEF26PpSD2TaycLK2b9bsf8F4Hyose/PVrLfdBmufv019df8OUr/ZVRdN1FzrJqxuvI/F1bc+9CZ7CJJVradYAlzFccfXTN0win1O2QEyAldLukLWDPFRSnfzxDe/RA6i85l095vmxW77LiV9cV9Dy2VcR94A25+/RHORJ9RJFb5r7C0b+rq78yGrs+Nzt6C9jcr11HzncRcnwEgTmpA7ipv4fkBJj67K7Pa5DKDQWFJXSknknFYvmk0R9NTes3Ne2z7OT3L1zmyr0id5n+HTuqfPj6BIcUM4/OP6z3Cm24mxG9BbU2MDJqGPq9dOkSMk25Joxk+yTsdwP9MnWEzmB3u6Qt0OqtCDZ0pJ7J5VNrz5Uxl7c9AtRvZJz1t8nkWyt3mX611sKTOK5uf5ik+tXMoRXP8aRx3p1/LtA4fL7+AvqNjklCyKla0BOsE7fbx0weM0CujnC7pI3w48sPHjxMR+qZhFr5RlOgOcBqMBhjYqK4Uu/J3aR/dGqmjzBkRf6/sd4TDuoYo8mmNYS4GdFbkMh08+YvQr9lZeW+An1iTFPI2d3lu3W/8brbYWOZkTmRjtRD+UFEjkCOssAe0kluzfautDv9V65cOXLk2NbKHctXrCkuKc2ZlDdyVLo1KBL5l1RpDQ4yctn+Xmb+5Hclyig3IyIJ0OhDPEPzSK7RWc1N57tiqc5PEnOp8hfs4VJ3TP2AQItCEw7Puw49gVuDzUEqXK/PHem7gJgvkelpd57JgcMn+w8xwimBAb7B8+bO4j7wqniTfjC9b9+BFSvXTJo8LT5hlNFs5wuVApFKJNFg5kkV5Jkbpdqs0gZiUUQo5stiT296ApMPNFzZ9vDP55/OSMwaEaoNs+tbi/AQHVjBvgvtoC8/vuK7776HkimpWTx/+7yc9+Fw3KlcDVOU/YnNZrZazUE2wBQcRID9uj3YGBJsAELtegDN4i/e2oMNcNxgmwmVAXOARayIhk9QtdGdUKzevGUbNYuHsv9XzkMMmf34W/cwV+ht8QL9Vbv3TMzJMwXYwTSZ0woDOEaSpdXbYAhqkZ8De2sYnT1s4XZclCoXQDzy8H1Lnyfjb37e3kLsJ4aLj1Ko9aEyhZGe7+6t2+8nUOsMwaiAfin91AN+cm2rwJ7qX9jyqMUSgEgAzVWaQEdsMjWOZ7Js6eKY0M9hEyDS+vH50+SEqj3Ec/pPn/5x2vQiiVwPysE3ndDN+bsFYCawC9sR7vcwO2+04wJtESFa58Gf8NQqoP289L5ydahKE0B1hlP6K8I3lfQG326V24aH0OChlc9hywojCMRqBELao0dy/uAi5vDKZ75a+ezBpb/eX27hittBPKH/3Lnzo0Zn8EVKZDce3IgHmvnSOBiLnO/CcHWMShuGQO1WB+H01MYnERi4w/MWgj23B7CgNGzvDj54QlU1e747PX+mTGFA1NlW+hIJqm4XeoBa+v0Q192Z8sdF8hh/qW7homXUUJ5Jab5+7oQ3Sie9Pzfn3cW5L3Kl7SOtpr+4ZJ4vX96Wh2zkmojxowazGV93cJ+f+ZlMHelWB/QbzbYpY/tnjxzacoyMF1Ut7Ml6AFlQ4qPl/nIrPBVqnzhxEmpDZ7QMn0A+MTaJNybRc6Qm8DOH+1xG/sh6AGLYhlmviuRhrueCPZNLJ0rnZPVcNPVtYG52z9rqLdwH7SOtoz8lNZPeEuPGVsuBbFyqiqTzBjPmbMXjSADdwj4FCpXasJYDzSIF45KJGqay9GW+zOE637UGR2p0FlfLSNNcZ/IeQhs2QDD89MYnnLvId9PwZpPZ6sNTHf/pcxStkkZkJ4ufOrrmN0fXPP31yifO7nyL+6DdpBX0b63cjkzeRY8HgN2xxmOl5w5bDjDR4Wq1LtStmgegLZ+veAwuRRyrmoE3CMTaDRs2QXNEY8Rkt0vaCEQsxC3O2+qYkgkf+gqDkAxRW3kmy0sdkXZBXKQiLhJhZOBp8gxu+0or6DcFYLPbpmesMEeTYiTcYcsepnLey0J5zA2nfmshVkYvmPIO1mMSh/czWAjEcnsEe7579epVr98wjkxFqQ0lMQwDqeqC7aufxIGEnxrKQ2ncRjYgSEqAOsZ5NoErb09pKf3Y3Qn923T3LWgG2YR4zM6d5Js9JAFeOWPHHgF7dM6rqkkG7ieJQ2Z68eJFaB4Tm+zdh4RopKla8GdXDLPZTD48zd69+6itPBOd3uQjjuFJ43zF0VpjJFfaztJS+sMj411rp2cQKxxN57tkSzY9o8/PMz4PADJgsnM07IOMOsZgChJJDKWl5Hy3YnOlUOzl5wUQw7Ad57yN/XraVxQ6OiWTGspDOWMnxxv0fBdT37mXK29naRH9hw9/LRCp2mJETNDQYD1nsqoupzY+gb1f28O+3kTS+IVT3+bCfh05vxPJwwMtYVRzLPnefUaMxrAGjIJ8N92tgdweEi2Wtul895vjl5QKoclsMQdY1RrNF3PIVuXOSIvoT0pObUv8pBOUJMl0S3aQ3PbqlYwPXnX9W4OqLth5I+z78uTff3ccaqdljFeoTG6XtBGIYStd31EdYEbEiX34hi/Xb6SG8kwaa168vJW5su2RK5XdTpf9kiu9I3J7+n88/SP73IXnU1+qipo57mNMTTJBa5jykr9hArnV8QDwKoSQ85sR9lmv2s/Ygw1iacDUvAKovW/fAa9nfCSG2fWct+1hdi/881BRFE0wPZby8rVZCf+XkzowJ2Vgevwb5098yX1wR+T29I8bn6tUm90M0XIgSUZ+R9YzmAwBswYZX7hXMj6E/S9yabbPrcFCWZTrfBeblDbuU9wAb/OVxCPAwNto6qrShvoJ1OfPkwfEPJbKkqcqZr+yeU6v8uI/blyk4krvlNyG/sbGRoHI8zlEJqgs9uAKcr5LSNrH5I7pL/PGXRUk2w9uCvu7urJrcAxPoKTp9/QZs6Ryg9slbQS8rXj8R2wMIwOZktbPR2ApZW8g8FjKlxjLZ70A7uEBW4qfcjrJneB3Um5D/8zieXKl0c0QLQeS5DFJ/Ka1uevJsqf8pPHwibbDTxJ/zhX2DzBJMVKxjDvfPXXqNFYrnYF8X+wdsCeV9DkQ0t3uLsfX9/ARO4zmNv0AWP3JivS4NyamDASyEt8pW7+c++AOym3ol8j0HmfOIEmkcJBnpuipeB2D3TloE8kdbcQQUWJT2CeH7dtKX+JLHf5Nt1fY7FFSpf3WN2u0Cipd6LiRQ8iZDPsAELzNYgnw4am/+YY8IOaxXKkkpxQEVYyz9hmu9M7KrehfuXId6HcjteWgN+q4vrHFenlt+8OI0m0H2uFWE5pMqCPI+W5ZOXRetnyVD9+cOdyHbKNrvQT6/d5O1on3MkunvekjtE+c1Ka7LueWTBFKAhSacIUmjC+UH/nmHPfBnZVb0a/RWbR6zzfNmP1Y+MnNPK5vRZExsdvltoN1KZLtZ48cIpbbo2OSoPC1hmu+fJVKF0LYaqrjJbD6VzPXtnfnS6Pl7A+AeSyNV7517my6WwTu9aOR++COy03p37Z9l1iibePGCd6dl9bP+RX76KTXsY85svp3PEksNnj0fHdYwii+f9iJDT3gFu6V2wiQtJ9szUnY52t27qqmVvJMGnY+2rCVadjGNFQyDTu6cqV3Q25Kf2hYbBtPeQEEAIkqKilGUjr5vbk5H3gXC6e8HRgYKJIYFixcCoW3bN3GE2oiQjXLp7/pVrPtKMr+JMEhE8hiZUrLLX4soyXSeHFP4xFT47fRBMeCb/0AdnvLjek//FVbT3ldgAeodaFyTUR7QKW1BVq5813s9JClag12tzpeAcIYRqEzBAnFGmyGaY+dQG5Mf1rGBJnCQE9OOjL8+PITJ36AwmPTx0vlerdPvQ6hWL16zXpqos4hN6Z/3ZdlmLiBljDMrUBrOIWFwgZENIc1qDkiKWxAMEUURRBgZ9FUwoKt03RV86bceiH9NmnCIgzBqaCwGNoePvyVShMYHOJoV0DbuGEjqX06jdx07X8g94O401+xuTJn0rSpeQU3xrTCqXks8IJFXmsxvcgN01qC/JkuNP+R2ttjhguzKPJbimL6YkaBC8VAPvv3Vihs9oJFQWFJ61DkjsKi2bfHzOsomjkHI6UPMt9a3OnHCipXGpv/V5u7AdMD3BDyFkJpGjREfPjw1xypN5ef0L9+wybXLZHI2FW6UHoTLYCMWq2//lajJ89puL6zx6co0epDXBXwESqg0FWiM17/lg+fXi9nr3W9BUjXzd6iAsm6m+4NIR1xJeT38lzVSAlbzmrOFWIIePuTavrr9xm4qgGogy5cb9kS7qEtN/XQi+s1WkD7zXtEO+xb0i+uRZvosXkFgFZwvW26hHtLr3WzdvMhAG6qNh8UoNZaohyJHKm3lJ/QbzTbkd/ienSv1IanJfnlpfWdMrbf9IzPQu36RId0enqfael98jM+dYSrYH1UgLmhWUSINi5SERmqwadshc9GxoukqqiYCGV+5qcomZrWz2AKoh6AS5Jj/ael9506tt+MzE9tNjOqoQI6AlCCChNTBqIvIC+9L8ydkzIAAwZgo6QYSXSYOj3ZD5v+IJsJfdEex40aHBBoGZvEkyijxo0cAp2B9GRfbNtsVjMGgu5Qc0wijxoLTWWPINVQiL9ozWS2udRAg7GRSngATD8iTgytoAMawQsjW429qs+k1AGUSLygPVqtAQptePbIISKFA5ZBs6mJfOgA9fLS+kGHwqz/StWRacl+tGt0FBxEfskmq0nnjOE+UlUkOqXWRo/hoVrYtiDrv5NTPyctZH9iNAVNHvM5VRV1UhP4Lg9ARiz0V9fW1nGk3lKu019Vtcd1Dz/GPCxadnHro2uLXttU8rfNc1+BoasX/WlF/r9nZH0KSpw15Ja6E+t7+CujMVNhlyXT3pqT88G20pegJezSuPMhWNO5m5kz8T/zJ7+3eU6vytKXMSo4Fvkdl6+ZFfmvfznzH2sLX0PJqhn/OrjiubLi3hWze60rfE0oj3FWM2izIOtTNLtv2R/Gjxpct+x5viwWhnbWMQJ5zPmKxyJDtfVbHp0/+d0Fue8smvr2tIw+iTHSo6ufHhUv+mHDU3NzPoA+5zf/Cr7yzbrfVs57CX2VzeoNlwXxGKMIvezqBvW+yH136bS3jq/vEWixNO7s9uXMv2+a/dfy2X9NcEhhB/gi+Cid9N6VbY8sn/7Gginv2IMNF7f+EkbIz/ysakHPkgkfYiAbZv0drGDsjTu6DRImOw8xB1c+y5fGgravVz0Dl726vTuGuX7m35fkvTlEnHhhy6Pwg5njPp457hMomeSQnCn/NRQGzlU85ohQYtRL8t6CBYi19zDwAAzz23W/3Ty7F8qJHfYy64r+QdmBb8ELKf2YwNgicaTeTq7THxZx/WZOjDklQbCu6DUYcdWM179f/z9w5/LZfzu08jk4AV6c2vgkXPvwymd9JcPECge6hxExfpRsmPUqzOGs6gJeT218oj9vpJ8kHsGjauGfEQ/QuEwdiZFsnfcyVD+58UkYF2+rF/4JHZUVv4o55+OfAO/ZtaDnrgV/qVn8xzWF/xwoSIYO0eGqumV/wIRGpyc39Aiz689VPD5QkCSQxcJj8BczZt/S57NG+Myb9P5gURJoWF3wz1HxwuGxYvhlxZxeaPDQimfhslADs/Ni5S/68UbiQj9p/A9lT5kDrPWbHwXH0L8o+2NUcFnD13/Y4VXPBgRYcS3CFbwExFfOexl8YHLjNdxldcG/lk1/07mr62Bx4tnyxxDh8DohWlq39Hlctamk95a5r2ws7o1CTAN4Gwa7saT35rm9jq55GsEM1w4SEp1XFbyeHOO/Y/6LB5b/nrX2X0+WPYkB8qVxMMWoOBFaw2vn7i64ZG3hP+FVAvn1R2XEEm1FxVaO1NsJR/+RI8f4zY756Oy/uu0RhGjEFuiRkzoQTMRHKjCzQa3FQh7ywhydNf6j2RP/s3/Z70smfAQPmDPxg9BgfXS4GtpgkAgSxeM/gg9h9oMAOvvhp/Ny3sdEQeM1i1+Agy+f/m9MfUymwuz/ohEMDzbCgPcu+d8Dy59DtGBnYQjmfe2SFwSyGDgcnf2YQ6WT38PUxFVoDbP/yOrfYd2B22FSFk/4EOEhIVqWNWJo0bhPEEWhKi7B5RgjO/u7Qn/4CmIM+LBaAzHzpqb1hRqYhckxEvRLDQKVTpT1CAk2wBXCQvToBYkOGoevDBQMR8jJHD40PkoeHqJzVjFD/RNgmSGiRHKLwB4Go4BjQR+MdMrY/vBsrGKIH/YgA2JDVJgajWck+56teJzqjGCA1fCrVc9EhGpmZn8MJbGCQBNMG3hw5nAf6EACZC2D1qAqLDx+9CAUQk8d+8+aKKctEY5+t5s59eyTePBrkI3gg6UuOMiIuWWxBEpUUWF2HQKXXBOe4JCxS2/fnJSBMnVEXJQCMxJ6YMkkWZg+FMOjFdCCBoVsloQKuByxHeUTRw+CT2DG4zVK0FdB5qcYKoINkg8E+cwRQzHdUYKIPTzWnyYQ7HLTL9hmgl3QPq6CnrgE5s4d8znYzRzhgxKApgJogQ4EK6s5wALdMEZ4IRqHc9Ny9sd3yaJO1GDXeHbt59JVjAVJA1jEtQEBFoRGLPAiuQMXOiJUo4cJjSYbxgWjIZ+AZaAM3uIq9AK72WwmEsbTiJ54CxvCIzEijIs+7CxXRyAKUp2RFkBnLOdQFZ4BG0IZevtCUowULkhzz9wx/aE52oQFUhME+BR6SmT65StWU05bIoT+M2fO8oTkZk430KSGQqtHUg1SSWah0aN7ZKdBKGmqQDJzlMNersvZms0yf/ZaClchbYdt0FVC0lp0TWviBXqhr10KALhQa8A61zwJJ0moim3QpTltp5meNM3m1EDl5uVo3PUWgFaumgDpnbhvEKq5VIIaqNZcMdoj/QvQylDV1Sy91lXBhZ/rTNtE+3RQ7GvSFH3tahCgbWLqS+Stu+Wc0D9yVJofX44t3wPc0/DlyYpL5lFeWyiE/qtXr9I3D+R+E27tfyD3pzyg/z4Wp/P/AWxBNIOsWd92AAAAAElFTkSuQmCC';
}
